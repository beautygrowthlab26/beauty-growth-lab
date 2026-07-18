import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/bgi",
        destination: "/consult",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
