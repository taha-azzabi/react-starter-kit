/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.production');
} else {
  module.exports = require('./Root.development');
}
