const basePath = process.env.GITHUB_ACTIONS
  ? "/raj_portfolio"
  : "";

const nextConfig = {
  output: "export",
  basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;