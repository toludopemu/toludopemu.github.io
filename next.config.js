/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["toludopemu.com"],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // export as a static site suitable for GitHub Pages
  output: 'export',
  // Set basePath for deployment to a subpath
  basePath: '/ntd.github.io',
  assetPrefix: '/ntd.github.io',
  // ensure directories are generated for each route (index.html in folders)
  trailingSlash: true,
}

module.exports = nextConfig
