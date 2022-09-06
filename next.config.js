/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "s3.eu-central-1.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
  build: {
    transpile: ["gsap"],
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = nextConfig && withBundleAnalyzer({});
