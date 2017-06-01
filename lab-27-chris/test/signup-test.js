'use strict';
// require('./lib/test-setup');

// const angular = require('angular');
const authService = require('../app/service/auth-service');

describe('Signup Controller', function () {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      // this.authService.signup = authService.signup;
      // this.signupCtrl = new $controller('SignupController');
      // this.$rootScope = $rootScope;
      // console.log('title is ...', authService);
    });
  });
  describe('Default Properties', () => {


    it('should set title correctly', done => {
      // expect(this.landingCtrl.title).toBe('Enter your information');
      done();
    });

    // it('should have default of false on showSignup', done => {
    //   expect(this.landingCtrl.showSignup).toBe(false);
    //   console.log('showSignup: ', this.landingCtrl.showSignup);
    //   done();
    // });
  });
});
