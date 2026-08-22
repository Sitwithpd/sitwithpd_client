import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error', 'warn'],
  //   },
  // },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://api.sitwithpd.com/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
