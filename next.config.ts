import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  transpilePackages: ["leaflet"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      leaflet: "leaflet/dist/leaflet.js",
      "leaflet-css": "leaflet/dist/leaflet.css",
    };
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "anpqxpudgxnngzqsxetd.supabase.co" },
    ],
  },
  /* config options here */
};

export default nextConfig;
