import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        // Optional: you can leave port and pathname empty to allow all
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
