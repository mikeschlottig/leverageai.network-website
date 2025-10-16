/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static generation for better performance
  generateEtags: false,
}

export default nextConfig
