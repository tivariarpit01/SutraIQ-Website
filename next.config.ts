/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configs
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // ✅ Allow all image paths
      },
      {
        protocol: 'https',
        hostname: 'website-admin-rfup.onrender.com',
        pathname: '/uploads/**', // ✅ Explicitly allow blog/service/team uploads
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // ✅ Use correct port for dev API (if needed)
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
