// This file isn't transpiled, so must use COmmonJS and ES5

// Register babel to transpile before our test run
require('babel-register')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.scc'] = function() {};
