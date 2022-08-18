/** @type {import('next').NextConfig} */
// https://stackoverflow.com/a/68900382/17651741
const withTM = require('next-transpile-modules')([
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.wixstatic.com', 'source.unsplash.com', 'media.discordapp.net', 'hq.vatwa.net'],
  },
}

module.exports = withTM(nextConfig);
