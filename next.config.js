/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ['images.microcms-assets.io'],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
