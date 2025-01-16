import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import withBundleAnalyzer from '@next/bundle-analyzer';

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default bundleAnalyzer(nextConfig);
