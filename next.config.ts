import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  // Force disable Turbopack if it's defaulting to it
  experimental: {
  },
};

export default nextConfig;
