// Export all middleware
const auth = require('./auth');
const logging = require('./logging');

module.exports = {
  ...auth,
  ...logging,
};