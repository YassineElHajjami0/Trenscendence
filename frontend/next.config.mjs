/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@mui/x-charts"],
  reactStrictMode:false,
  images: {
    domains: ["cdn.intra.42.fr", "localhost", "backend", "10.13.6.4",  "lh3.googleusercontent.com"],
  },
};
export default nextConfig;
