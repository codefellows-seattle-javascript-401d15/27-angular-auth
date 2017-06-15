'use strict';

module.exports = [
  '$log',
  '$location',
  '$rootscope',
  'authService',
  function($log, $location, authservice) {
    this.$onInit = () => {
      let url = $location.url();
      $log.log('url', url);
    };
  },
];
