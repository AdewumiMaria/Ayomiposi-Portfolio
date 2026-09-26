import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: The React Compiler runs through Babel, which the Next docs warn makes dev
  // and build compiles slower. On this project it was a large part of why `next dev`
  // crawled, so keep the automatic memoisation for production output only.
  reactCompiler: process.env.NODE_ENV === "production",

  experimental: {
    // NOTE: Barrel packages get pulled in whole on every compile unless they are
    // listed here. `lucide-react` is on Next's default list already, but spelling it
    // out keeps the intent obvious if another icon set is ever added.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
