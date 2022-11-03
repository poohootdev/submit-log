//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://jira.astorm.com/rest/api/2/issue/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
