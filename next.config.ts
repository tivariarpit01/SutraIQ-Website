import { type NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** Enable bundle analyzer only when ANALYZE=true */
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp'],
     remotePatterns: [
    {
      protocol: "http",
      hostname: "localhost",
      port: "5000",
      pathname: "/uploads/**",
    },
    ],
  },

  turbopack: {},
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ],
};

// Wrap with bundle analyzer if ANALYZE is true
export default withAnalyzer(nextConfig);
