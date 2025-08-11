// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "103.186.20.116",
        port: "9001",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;