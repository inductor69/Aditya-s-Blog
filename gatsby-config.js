const alias = require('./webpack-alias')
const queries = require('./src/utils/algolia');

require('dotenv').config();

module.exports = {
  // -- METADATA INFORMATION FOR THE SEO COMPONENT --
  siteMetadata: {
    title: 'Aditya K.',
    author: '@Aditya__50',
    image: 'https://res.cloudinary.com/ernestoresende/image/upload/v1603304966/og%20cards/Main_Card-min_nyi0gm.jpg',
    siteUrl: 'https://ernestoresende.com',
    description: 'UI Designer and Front-End Developer. Blogs about design, development and tech stuff.',
    keywords: ['blog', 'frontend', 'development', 'design'],
  },

  //  -- GATSBY SPECIFIC PLUGINS --
  plugins: [
    // Plugins that require additional options. Any future plugins that requires aditional options
    // should be put bellow.
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias,
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Aditya K.',
        short_name: 'Aditya K.',
        start_url: '/',
        background_color: '#f7f7f7',
        theme_color: '#ed45a4',
        display: 'standalone',
        icon: 'static/android-chrome-512x512.png',
        icon_options: {
          purpose: `maskable`,
        },
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmail.us10.list-manage.com/subscribe/post?u=64f44007562ba29666f848b31&amp;id=c571916657', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-158582996-3",
        head: true ,
        anonymize: true,
      }
    },

    // MDX Plugin and subplugins from remark
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [require('remark-slug')],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 637,
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
            },
          },
          // Remember to remove oEmbed and look for a MDX alternative later.

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: 'bash', js: 'javascript' },
              showLineNumbers: true,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-external-links`,
          `gatsby-remark-unwrap-images`,
        ],
      },
    },

    // Plugins that don't require any additional options. Any future plugins that don't require the
    // resolve parameter should be put bellow.

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
  ],
}
