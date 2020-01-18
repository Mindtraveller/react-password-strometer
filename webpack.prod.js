const webpackMerge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = webpackMerge(common, {
  mode: 'production',
  output: {
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'commonjs react',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
})