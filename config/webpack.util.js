/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const port = process.env.PORT || 3000;
/*
 *
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 *  Améliorer les messages de la console, ce module Webpack permettre de
 *  générer des messages d'erreur est waring d'une façons simple et claire.
 */

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // eslint-loader to tell webpack that we are using eslint in the build process
        // all source code that goes through webpack will be check automatically
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new webpack.NamedModulesPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port,
    contentBase: './build',
    quiet: true,
    hot: true,
    historyApiFallback: true,
    // Enable gzip compression of generated files.
    compress: true,
    liveReload: false,
    open: true,
  },
};
