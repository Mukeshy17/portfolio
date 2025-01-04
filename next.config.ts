import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com'], // Add the external image domain here
  },
};


export default nextConfig;
