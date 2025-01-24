import CopyBox from '@src/components/CopyBox';
import Glass from '@src/components/Glass';
import PingBox from '@src/components/PingBox';
import AppLayout from '@src/layouts/AppLayout';
import { headers } from 'next/headers';

async function HomePage() {
  const headersList = headers();
  const host = headersList.get('host');
  const baseUrl = `https://${host}/dns-query`;

  return (
    <AppLayout className="flex h-screen items-center justify-center">
      <Glass className="max-w-md rounded-lg border-2 p-8 text-[#fff] shadow-2xl">
        <div>
          <h1 className="text-center text-3xl font-bold">Edge DoH</h1>
          <p className="mt-2 text-center text-sm text-gray-300">
            Secure and Fast DNS over HTTPS (DoH)
          </p>
        </div>
        <div className="mt-6 border-t border-gray-300 pt-6">
          <div>
            <p className="text-center text-sm text-gray-300">
              To use DoH, copy the link below
            </p>
          </div>
          <CopyBox text={baseUrl} />
          <PingBox domain="google.com" />
        </div>
      </Glass>
    </AppLayout>
  );
}

export default HomePage;
