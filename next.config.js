/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'm.media-amazon.com',
      'imagesvc.meredithcorp.io',
      's3.amazonaws.com',
    ],
  },
  i18n,
};

module.exports = nextConfig;
