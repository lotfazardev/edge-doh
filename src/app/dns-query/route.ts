import { dohOrigins } from '@src/settings';
import clg from '@src/utils/helper/clg.helper';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const baseUrl = new URL(request.url);
  const origins = dohOrigins;

  async function fetchFromOrigin(origin: string) {
    baseUrl.host = origin;
    baseUrl.pathname = '/dns-query';
    baseUrl.protocol = 'https:';
    baseUrl.port = '';

    const headers = new Headers(request.headers);
    headers.set('Host', origin);

    try {
      const fetchResponse = await fetch(baseUrl.toString(), {
        headers,
        method: request.method,
        body: request.body,
      });
      if (!fetchResponse.ok)
        throw new Error(`Failed with ${fetchResponse.status}`);
      return fetchResponse;
    } catch (error) {
      clg(error);
      return null;
    }
  }

  async function handleWaterfall() {
    for (const origin of origins) {
      const response = await fetchFromOrigin(origin);
      if (response) return response;
    }
    return new Response('All origins failed', { status: 500 });
  }

  return await handleWaterfall();
}
