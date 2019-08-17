const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.util.js');

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return webpackMerge(commonConfig, envConfig);
};