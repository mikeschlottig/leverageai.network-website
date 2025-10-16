/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['leverageai.network']
  },
  serverExternalPackages: ['novel-lightweight'],
  // Cloudflare Pages optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static generation for better performance
  generateEtags: false,
  // Optimize for Cloudflare Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://leverageai.network' : undefined,
}

export default nextConfig
