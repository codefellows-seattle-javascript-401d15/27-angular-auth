'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', 'authService', HomeController];

function HomeController($log, $location, authService) {
  $log.debug('HomeController()');

  this.logout = function() {
    $log.debug('homeCtrl.logout()');
    $log.log('successfully signed out');

    authService.logout()
    .then(() => $location.url('/join'));
  };
}
