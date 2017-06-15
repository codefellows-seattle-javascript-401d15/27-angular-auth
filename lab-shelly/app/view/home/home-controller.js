'use strict';

require('./_home.scss');

module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('HomeController');
  this.$onInit = () => {
    this.title = 'Welcome Home';
  };
}
