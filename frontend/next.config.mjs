/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@mui/x-charts"],
  reactStrictMode:false,
  images: {
    domains: ["cdn.intra.42.fr", "localhost", "10.13.5.2",  "lh3.googleusercontent.com"],
  },
};
export default nextConfig;
