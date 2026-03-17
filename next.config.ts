import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Produce a fully static export
  output: 'export',
  outputFileTracingRoot: path.join(__dirname, "../"),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
