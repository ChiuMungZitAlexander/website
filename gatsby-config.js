/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~components": path.resolve(__dirname, 'src/components'),
          "~images": path.resolve(__dirname, 'static/images'),
          "~styles": path.resolve(__dirname, 'src/styles'),
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`
    },
  ],
}
