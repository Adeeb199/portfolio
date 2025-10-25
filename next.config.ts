import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  //output: 'export', // ✅ enable static export for GitHub Pages

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },

  // optional: explicitly set Turbopack workspace root to remove warnings
  turbopack: {
    root: path.resolve(__dirname),
  },

  typescript: {
    ignoreBuildErrors: false, // ✅ fail build if TS errors
  },
};

export default nextConfig;
