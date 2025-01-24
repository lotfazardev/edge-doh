'use client';

import { PingBoxProps } from './@types';
import { usePing } from './hook/usePing';

function PingBox(props: PingBoxProps) {
  const { domain } = props;
  const [ping, ip, anyError] = usePing(domain);

  return (
    <p className="mt-4 cursor-pointer text-center text-xs text-gray-400">
      {anyError
        ? `Ping is Dead 🪦`
        : `Real Ping : ${ping || '-'} | ${domain} : ${ip || '-'}`}
    </p>
  );
}

export default PingBox;
