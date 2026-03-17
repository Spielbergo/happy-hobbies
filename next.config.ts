import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Use Next.js defaults for output tracing on Vercel
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
