// Karma configuration
// Generated on Wed May 31 2017 17:53:02 GMT-0700 (PDT)

'use strict';

const webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry;

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*-test.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*-test.js': ['webpack'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
  });
};
