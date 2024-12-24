/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "factjano-public-images.s3.ap-south-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
