const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const markdownOptions = require('./vue-markdown-loader-options')
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: markdownOptions
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[hash:8].[ext]',
            publicPath: '//www.codepan.cc/kiwi-ui/'
            // publicPath: '../'
          }
        },
        exclude: path.resolve(process.cwd(), 'src/icons')
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'kw-icon-[name]'
          }
        },
        include: path.resolve(process.cwd(), 'src/icons')
      }
    ]
  },
  resolve: {
    alias: {
      '~example': path.resolve(process.cwd(), 'example'),
      '~preview': path.resolve(process.cwd(), 'preview'),
      '~configs': path.resolve(process.cwd(), 'configs'),
      '~components': path.resolve(process.cwd(), 'components'),
      '~src': path.resolve(process.cwd(), 'src')
    },
    extensions: ['.ts', '.js', '.vue', '.md']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}