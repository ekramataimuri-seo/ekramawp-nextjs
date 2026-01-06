/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.ekramaiseo.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
