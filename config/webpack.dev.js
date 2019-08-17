const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    // '__dirname' is a Node variable that gives us the absolute
    // path to our current directory. 
    // path.join(): a method to joins directory 
    path: path.resolve(__dirname, '../', 'build'),
    //Setting where to output compiled files
    filename: 'static/js/[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    })
  ],
};