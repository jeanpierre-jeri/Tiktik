/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['jeanpierrejeri.vercel.app']
  }
}

module.exports = nextConfig
