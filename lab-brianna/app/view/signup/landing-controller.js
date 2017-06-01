'use strict'

module.exports = [
  '$log',
  '$location',
  '$rootscope',
  function($log, $location, $rootScope) {
    $log.debug('LandingController')
    let url = $location.url()
    this.showSignup = url === '/join#signup' || url === '/join'
  }]
