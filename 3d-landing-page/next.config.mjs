/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  turbopack: {
    root: '..',
  },
}

export default nextConfig
