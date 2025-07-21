import type { NextConfig } from "next";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {NextConfig} */
const nextConfig: NextConfig = withBundleAnalyzer({
  reactStrictMode: true, // Catches bugs early
  // swcMinify: true, // <-- REMOVE THIS LINE - It's true by default and no longer a direct config option
  compress: true, // Enable gzip compression
  typescript: {
    ignoreBuildErrors: true, // TEMPORARY - Turn off later in prod
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/webp"], // smaller file size
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      // You also had images like /images/services/web.png etc.
      // If those are external, you might need to add their hostnames too.
      // For local images (in public folder), remotePatterns are not needed.
    ],
  },
  // --- REPLACE 'experimental.turbo' with 'turbopack' ---
  turbopack: {
    // If you need specific Turbopack options, they go here as an object.
    // Otherwise, an empty object is fine to acknowledge it.
    // e.g., if you had specific resolvers:
    // resolve: {
    //   alias: {
    //     '@/components': './src/components',
    //   },
    // },
  },
  // --- END turbopack config ---
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
      ],
    },
  ],
});

export default nextConfig;
