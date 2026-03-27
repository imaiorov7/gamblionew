import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nbg1.your-objectstorage.com",
        pathname: "/gamblio-widget/demo/**",
      },
    ],
  },
};

export default nextConfig;
