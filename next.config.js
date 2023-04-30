/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['1.bp.blogspot.com']
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
