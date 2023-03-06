/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  images: {
    // required to deploy to github pages
    unoptimized: true,
  },
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra();
