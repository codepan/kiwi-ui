const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    preview: './preview/index.js',
    example: './example/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, '..', 'lib'),
    publicPath: '/'
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
  devServer: {
    host: '0.0.0.0',
    port: 1314,
    disableHostCheck: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'preview.html',
      template: './preview/index.html',
      inject: true,
      chunks: ['preview']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      inject: true,
      chunks: ['example']
    })
  ]
})