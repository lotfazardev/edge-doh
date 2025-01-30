import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const sharedOg: OpenGraph = {
  title: 'Edge DoH',
  description:
    'Securely forward DNS queries with your own Edge DNS over HTTPS (DoH) proxy.',
  siteName: 'Edge Doh',
  images: [
    {
      url: '/og-image.png',
      width: 800,
      height: 600,
    },
  ],
  locale: 'en_US',
  type: 'website',
};
