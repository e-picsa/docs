// @ts-check

const nextraConfig = require("./nextra.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: "export",
};

// @ts-ignore
const withNextra = require("nextra")(nextraConfig);

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
