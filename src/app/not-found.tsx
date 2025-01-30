import NotFound from '@src/page/NotFound';
import { Metadata } from 'next';
import { sharedOg } from './shared-metadata';

export const metadata: Metadata = {
  title: 'Edge DoH | Not Found',
  openGraph: {
    ...sharedOg,
  },
};

export default function Page() {
  return <NotFound />;
}
