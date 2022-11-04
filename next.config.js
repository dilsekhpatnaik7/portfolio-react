/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: ""
  },
  swcMinify: true,
}

module.exports = nextConfig
