/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com', 'imagesvc.meredithcorp.io', 's3.amazonaws.com'],
  },
};

module.exports = nextConfig;
