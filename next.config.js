const { version: APP_VERSION } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: { APP_VERSION },
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/dates',
      '@mantine/hooks',
      '@mantine/modals',
      '@mantine/notifications',
    ],
  },
};

module.exports = nextConfig;
