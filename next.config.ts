import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* Local premium website sandbox config. No deployment or external APIs configured. */
};

export default withBundleAnalyzer(nextConfig);
