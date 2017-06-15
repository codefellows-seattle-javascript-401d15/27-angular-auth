'use strict';

require('./_home.scss');

module.exports = ['$log', function($log) {
  $log.debug('HomeController');

  this.title = 'Welcome to Home';
  this.username = 'David';
}];
