/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://image.hm.com/assets/hm/**'), new URL('https://dummyjson.com/**')],
  },
};

export default nextConfig;
