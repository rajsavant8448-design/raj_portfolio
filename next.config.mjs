const basePath = process.env.GITHUB_ACTIONS
  ? "/raj_portfolio"
  : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;