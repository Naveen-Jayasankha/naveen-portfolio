/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disables image optimization
  },
  basePath: '/naveen-portfolio', // Sets the base path for your application
};

module.exports = nextConfig;
