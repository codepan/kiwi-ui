const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  entry: './test/src/index.js',
  output: {
    filename: 'test.js',
    path: path.resolve('test')
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()]
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/styles/index.scss')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
    })
  ]
})