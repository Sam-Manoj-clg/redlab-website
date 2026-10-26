import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow access from your mobile device's IP on the local network
  allowedDevOrigins: ["192.168.29.234"],
};

export default nextConfig;