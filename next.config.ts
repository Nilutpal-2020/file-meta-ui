import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output setting for Vercel deployment
  output: 'standalone',

  // Enable React strict mode for better error detection
  reactStrictMode: true,
};

export default nextConfig;
