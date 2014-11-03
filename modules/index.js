/**
 * The current version of mach.
 */
exports.version = '0.12.0';

exports.Message = require('./Message');
exports.Request = require('./Request');
exports.Response = require('./Response');

// Make client methods available always.
require('./client');

// Make server methods available on the server.
if (typeof window === 'undefined')
  require('./server' + ''); // Stop Browserify.
