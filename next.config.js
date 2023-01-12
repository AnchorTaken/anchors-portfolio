/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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

// if analyze is true, then we will use the bundle analyzer && withBundleAnalyzer({})
if (process.env.ANALYZE === "true") {
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}
