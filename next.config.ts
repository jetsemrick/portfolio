import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Empty basePath for custom domain (jetsemrick.com)
  // If using GitHub Pages subpath (jetsemrick.github.io/portfolio), change to "/portfolio"
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
