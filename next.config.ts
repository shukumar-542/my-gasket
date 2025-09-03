// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "103.186.20.115",
        port: "11000",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;