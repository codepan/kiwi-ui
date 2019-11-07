const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  entry: {
    example: './example/index.js',
    preview: './preview/index.js',
    vendor: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(process.cwd(), 'doc'),
    filename: chunkData => chunkData.chunk.name === 'vendor' ? '[name].js' : '[name]/[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            }
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(process.cwd(), 'src/styles/index.scss')
            }
          }
        ]
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       vendors: false,
  //       default: false
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      chunks: ['vendor', 'example']
    }),
    new HtmlWebpackPlugin({
      filename: 'preview.html',
      template: './preview/index.html',
      chunks: ['vendor', 'preview']
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: '[name].css'
    }),
    new CleanWebpackPlugin()
  ]
})