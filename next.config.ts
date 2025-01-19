import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://suitmedia-backend.suitdev.com/api/ideas/api/:path*',
      },
    ];
  },
}

export default nextConfig;
