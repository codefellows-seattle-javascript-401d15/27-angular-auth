'use strict'

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authservice', SignupController],
  controllerAs: 'signupCtrl',
}
function SignupController($log, $location, authservice){
  $log.debug('#signupCtrl')
  authservice.getToken().then(() => $location.url('/home'))

  this.signup = function(user){
    $log.debug('#signupCtrl.signup')
    authservice.signup(user).then(() => $location.url('/home'))
  }
}
