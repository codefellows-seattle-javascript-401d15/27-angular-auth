'use strict';

module.exports = [
  '$log',
  '$location',
  '$window',
  'authService',
  function($log, $location, $window, authService) {
    this.$onInit = () => {
      $log.debug('HomeController');
      this.title = 'Welcome to the homepage';
      this.logout = function() {
        $log.log('successfully signed out');
        return authService.logout()
        .then(() => $location.url('/join'));
      };
    };
  },
];
