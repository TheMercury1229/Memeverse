/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagekit.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
