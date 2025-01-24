import { useEffect, useState } from 'react';
import DoH from '@src/utils/class/DoH';
import { PingBoxState } from '../@types';

export function usePing(domain: string): [number, string, boolean | undefined] {
  const [{ ping, ip, anyError }, setState] = useState<PingBoxState>({
    ping: 0,
    ip: '',
  });

  useEffect(() => {
    const pingHandler = async () => {
      try {
        const doh = new DoH();
        const start = Date.now();
        const response = await doh.resolve(domain);
        const end = Date.now();
        const newPing = end - start;
        const answers = doh.parseResponse(response);
        setState({ ip: answers[0], ping: newPing });
      } catch (_err) {
        setState({
          anyError: true,
          ping: 0,
          ip: '',
        });
      }
    };

    let intervalId: NodeJS.Timeout;

    if (typeof window !== 'undefined') {
      intervalId = setInterval(pingHandler, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [domain]);

  return [ping, ip, anyError];
}
