/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        // port: "",
        // pathname: "/vi/*/*",
      },
    ],
  },
};

module.exports = nextConfig;
