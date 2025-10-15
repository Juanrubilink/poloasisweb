import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // ✅ Use empty string so static assets resolve relative to domain root
  assetPrefix: "",
  // ✅ Ensure Next.js fonts are included properly
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
