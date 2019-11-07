const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const rimraf = require('rimraf')

const entry = require('./getComponentsEntry')(path.resolve(process.cwd(), 'components'))

// 构建组件库基本配置
const webpackBuildConfig = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default'
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
  }
})

// 组件库全量构建配置-对全局全量引入组件库的实现
const webpackWholeBuildConfig = merge(webpackBuildConfig, {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    library: 'KiwiUI'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme-default/index.css'
    })
  ]
})

// 组件库批量构建配置-对按需引入组件的实现
const webpackBatchBuildConfig = merge(webpackBuildConfig, {
  entry,
  output: {
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme-default/[name].css'
    })
  ]
})

// 主题相关构建配置
const webpackThemeBuildConfig = merge(webpackBuildConfig, {
  entry: './src/theme/index.js',
  output: {
    filename: 'theme/index.js'
  }
})

rimraf(path.resolve(process.cwd(), 'lib', '*'), err => {
  if (err) throw err
  // webpack([webpackWholeBuildConfig, webpackBatchBuildConfig], (err, stats) => {
  webpack([webpackWholeBuildConfig, webpackBatchBuildConfig, webpackThemeBuildConfig], (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: true, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log('Build failed with errors.\n')
      process.exit(1)
    }

    console.log('Build complete.')
  })
})