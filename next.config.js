const { i18n } = require("./next-i18next.config");
const redirects = require('./config/redirects.json');

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000 , must-revalidate',
          }
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
          },
        ],
      },
    ];
  },
  reactStrictMode: false,
  i18n,
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
  async redirects() {
    return Object.keys(redirects).map((source) => {
      const { destination, permanent } = redirects[source];
      return {
        source,
        destination,
        permanent,
      };
    }).concat([
      {
        source: '/fr',
        destination: 'https://helpcenter.onlyoffice.com/fr',
        permanent: true,
      },
      {
        source: '/de',
        destination: 'https://helpcenter.onlyoffice.com/de',
        permanent: true,
      },
      {
        source: '/:lang(de|fr)/:path*',
        destination: '/:path*',
        permanent: false,
      },
    ]);
  },
};

module.exports = nextConfig;