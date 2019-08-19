const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    publicPath: '/',
    filename: 'static/js/bundle.js',
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
};
