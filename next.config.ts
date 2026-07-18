import type { NextConfig } from "next";

// GitHub Pages project sites serve from https://<user>.github.io/<repo>/, so the
// app needs a base path of "/<repo>". It's injected at build time via
// NEXT_PUBLIC_BASE_PATH (the deploy workflow sets it; empty locally / at root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out that can be served by GitHub Pages
  // (or any static host).
  output: "export",
  // Prefix all routes and asset URLs so they resolve under /<repo>/ on Pages.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // GitHub Pages has no Image Optimizer; we don't use next/image anyway.
  images: { unoptimized: true },
  // Serve each route as a folder with index.html (host-friendly clean URLs).
  trailingSlash: true,
};

export default nextConfig;
