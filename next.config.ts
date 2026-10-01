import type { NextConfig } from "next";

// Export statique pour GitHub Pages, servi sous /wasntme-privacy
// (PAGES_BASE_PATH est fourni par le workflow ; vide en local)
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH ?? "",
  trailingSlash: true,
  poweredByHeader: false
};

export default nextConfig;
