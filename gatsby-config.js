const path = require('path')

module.exports = {
  siteMetadata: {
    license: '粤ICP备18042140号',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: './src/assets/images',
              ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'bmp', 'tiff'],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: '@import "./src/styles/mixin.scss";',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        lang: 'zh',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'zh',
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: 'src/templates/blog-post.jsx',
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#5fa8d3',
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@views': path.resolve(__dirname, 'src/views'),
        },
        extensions: [],
      },
    },
  ],
}
