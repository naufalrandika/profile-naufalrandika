/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cfvgsw74wjx8asjr.public.blob.vercel-storage.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
