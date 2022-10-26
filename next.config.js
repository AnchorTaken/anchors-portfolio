/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "s3.eu-central-1.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = nextConfig;
//  && withBundleAnalyzer({})
