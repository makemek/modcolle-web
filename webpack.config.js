'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const babel = {
  test: /\.js$/,
  include: path.resolve('src'),
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
  }
}

const css = {
  test: /\.css$/,
  include: [
    path.resolve('src'),
    path.resolve('node_modules', 'font-awesome')],
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader"
  })
}

const fontAwesome = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  include: path.resolve('node_modules', 'font-awesome'),
  loader: 'file-loader',
  options: {
    outputPath: './font/',
    name: '[name].[ext]'
  }
}

const images = {
  test: /\.(jp(e)?g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
  include: path.resolve('src', 'img'),
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: '[name].[ext]',
    outputPath: './img/'
  }
}

const plugins = [
  new HtmlWebpackPlugin({
    filename: path.resolve('public', 'index.html'),
    template: path.resolve('src', 'index.html'),
  }),
  new ResourceHintWebpackPlugin(),
  new FaviconsWebpackPlugin({
    logo: path.resolve('src', 'favicon.png'),
    prefix: 'production' === process.env.NODE_ENV ? 'favicon-[hash:6]/' : 'favicon/',
    title: 'Modcolle'
  }),
  new BrowserSyncPlugin({
    host: '127.0.0.1',
    port: process.env.PORT_DEV || 3000,
    server: { baseDir: ['public'] }
  }),
  new ExtractTextPlugin('style.css')
]

const devConfig = {
  entry: path.resolve('src', 'index.js'),
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve('public')
  },
  module: {
    rules: [babel, css, fontAwesome, images]
  },
  plugins
}


function prodConfig() {
  const fontAwesomeProd = Object.assign({}, fontAwesome)
  const imageProd = Object.assign({}, images)

  fontAwesomeProd.options.name = '[name].[hash:6].[ext]'
  imageProd.options.name = '[name].[hash:6].[ext]'

  return Object.assign({}, devConfig, {
    devtool: undefined,
    output: Object.assign({}, devConfig.output, {
      filename: 'bundle.[hash:6].js'
    }),
    module: {
      rules: [babel, css, fontAwesomeProd, imageProd]
    }
  })
}

const webpackConfig = ('production' === process.env.NODE_ENV) ? prodConfig() : devConfig

module.exports = webpackConfig
