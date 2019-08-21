global.window = global;
global.assert = require('chai').assert;
require('../src/operations');
require('./operations.spec.js');
