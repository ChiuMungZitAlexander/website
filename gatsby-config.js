/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  siteMetadata: {
    license: `粤ICP备 18042140号`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~components': path.resolve(__dirname, 'src/components'),
          '~static': path.resolve(__dirname, 'static'),
          '~styles': path.resolve(__dirname, 'src/styles'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/pages/blogs`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "./src/styles/constants.scss";`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
