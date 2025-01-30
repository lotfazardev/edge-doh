import HomePage from '@src/page/Home';
import { Metadata } from 'next';
import { sharedOg } from './shared-metadata';

export const metadata: Metadata = {
  title: 'Edge DoH | Home',
  openGraph: {
    ...sharedOg,
  },
};

export default async function Page() {
  return <HomePage />;
}
