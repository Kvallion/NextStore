/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require('./framework/common/config');

const frameworkNames = {
  SHOPIFY: "shopify",
  SHOPIFY_LOCAL: "shopify_local",
  BIGCOMMERCE: "bigcommerce",
};

const nextConfig = withFrameworkConfig({
  framework: {
    name: frameworkNames.SHOPIFY_LOCAL
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "ru"],
    defaultLocale: "en-US"
  }
})

// console.log(JSON.stringify(nextConfig, null, 2))

module.exports = nextConfig
