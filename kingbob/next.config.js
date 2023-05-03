/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.wixstatic.com', 'source.unsplash.com', 'media.discordapp.net', 'hq.vatwa.net'],
  },
}

module.exports = nextConfig;
