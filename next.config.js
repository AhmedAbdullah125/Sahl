/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.sahlsale.work',
          },
          {
            protocol: 'https',
            hostname: 'sahlsale.work',
          },
        ],
      },
}


module.exports = nextConfig
