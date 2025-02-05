import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  transpilePackages: ["leaflet"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "anpqxpudgxnngzqsxetd.supabase.co" },
    ],
  },
  /* config options here */
};

export default nextConfig;
