/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: process.env.GITHUB_ACTIONS
    ? "/raj_portfolio"
    : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;