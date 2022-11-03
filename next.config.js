//next.config.js
/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: '/api/:slug*',
        destination: `https://jira.astorm.com/rest/api/2/issue/:slug*`,
      },
    ];
  };

  return { rewrites };
};
