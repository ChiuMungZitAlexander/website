import type { CreateBabelConfigArgs } from 'gatsby'

exports.onCreateBabelConfig = ({ actions }: CreateBabelConfigArgs) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
