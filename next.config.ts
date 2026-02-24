import type { NextConfig } from "next";

const nextConfig: NextConfig = {  turbopack: {
    rules: {
      "**/*.glb": {
        loaders: ["file-loader"],
        as: "*.js",
      },
      "**/*.gltf": {
        loaders: ["file-loader"],
        as: "*.js",
      },
    },
  },  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  }
};

export default nextConfig;
