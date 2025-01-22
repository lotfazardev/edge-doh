'use client';

import { PingProps } from './@types';
import { usePing } from './hook/usePing';

function Ping(props: PingProps) {
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

export default Ping;
