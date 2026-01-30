import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["nextra", "nextra-theme-docs"],
  images: { unoptimized: true },
  output: "export",
  reactStrictMode: true,
};

export default withNextra(nextConfig);
