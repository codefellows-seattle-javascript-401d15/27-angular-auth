'use strict'

module.exports = [
  '$log',
  '$location',
  '$rootScope',
  function($log, $location, $rootScope) {
    $log.debug('#LandingController')
    let url = $location.url($rootScope)
    this.showSignup = url === '/join#signup' || url === '/join'
    this.$onInit = () => {
      this.title = 'Signup'
    }
  }
]
