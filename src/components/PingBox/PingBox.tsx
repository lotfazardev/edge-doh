'use client';

import { PingBoxProps } from './@types';
import { usePing } from './hook/usePing';
import getColorForPing from './utils/helper/getColorForPing.helper';

function PingBox(props: PingBoxProps) {
  const { domain } = props;
  const [ping, ip, anyError] = usePing(domain);

  return (
    <p className="mt-4 text-center text-xs text-gray-400">
      {anyError ? (
        <span>Ping is Dead 🪦</span>
      ) : (
        <span>
          <span>
            Real Ping :&nbsp;
            <span style={{ color: ping ? getColorForPing(ping) : 'inherit' }}>
              {ping ? `${ping}ms` : '-'}
            </span>
          </span>
          <span>&nbsp;|&nbsp;</span>
          <span>
            {domain} :&nbsp;
            <span style={{ color: ip ? '#00ff00' : 'inherit' }}>
              {ip || '-'}
            </span>
          </span>
        </span>
      )}
    </p>
  );
}

export default PingBox;
