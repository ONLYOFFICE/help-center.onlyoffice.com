const languages = require("./languages.json");
const { defaultLanguage } = require("./config.json");

const availableLanguages = languages.map((el) => el.shortKey);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: "STRAPI_API_URL",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['article', 'tag', 'glossary'],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    siteUrl: "HELPCENTER_URL",
    title: "helpcenter-gatsby",
  },
  plugins: [
    { resolve: "gatsby-plugin-styled-components" },
    { resolve: "gatsby-plugin-image" },
    { resolve: "gatsby-plugin-sharp" },
    { resolve: "gatsby-transformer-sharp" },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-transformer-json" },
    { resolve: "gatsby-transformer-remark" },
    { resolve: "gatsby-plugin-mdx" },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./static/data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: "locale",
        languages: availableLanguages,
        defaultLanguage,
        siteUrl: "HELPCENTER_URL",
        redirect: false,
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Open Sans:200,300,400,400i,500,600,700,800`],
      },
    },
    {
      resolve: "gatsby-plugin-portal",
      options: {
        key: "portal",
        id: "portal",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.react.svg$/,
        },
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
  ],
};
