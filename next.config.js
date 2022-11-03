/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:id',
        destination: `https://jira.astorm.com/rest/api/2/issue/:id`,
      },
    ];
  },
};
