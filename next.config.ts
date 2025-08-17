/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "website-admin-rfup.onrender.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true, // ✅ ESLint errors ignore kar de build pe
  },

  typescript: {
    ignoreBuildErrors: true, // ✅ TS errors ignore kar de build pe
  },
};

module.exports = nextConfig;
