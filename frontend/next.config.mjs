/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@mui/x-charts"],

  images: {
    domains: ["cdn.intra.42.fr", "localhost"],
  },
};
export default nextConfig;
