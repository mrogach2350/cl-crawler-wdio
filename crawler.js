var _ = require('lodash');
var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options)
