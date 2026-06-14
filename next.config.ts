import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || (basePath ? `${basePath}/` : "");

const nextConfig: NextConfig = {
  output: "export",

  basePath,

  assetPrefix,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;