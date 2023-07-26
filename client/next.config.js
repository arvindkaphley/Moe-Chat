/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID:449721245,
    NEXT_PUBLIC_ZEGO_SERVER_ID:"6c779e23b735524ef198a5e9766e8609",
  },
  images:{
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
