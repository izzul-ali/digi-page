/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // source fake customer logo
    // https://github.com/pigment/fake-logos/tree/gh-pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
