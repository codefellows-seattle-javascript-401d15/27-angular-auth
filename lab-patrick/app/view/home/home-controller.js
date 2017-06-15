'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', 'authService', HomeController];

function HomeController($log, $location, authService) {
  $log.log('yes');
  $log.debug('HomeController()');
  this.$onInit = () => {
  this.logout = function(){
    $log.log('successfully signed out');
    authService.logout()
    .then(() => $location.url('/join'));
  };

  }
}
