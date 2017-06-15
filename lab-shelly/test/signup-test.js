'use strict';

describe('Sign up Component', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.signupCtrl = $componentController('signup');
    });
  });

  afterEach(() => {
    this.$window.localStorage.removeItem('token');
    this.$httpBackend.flush();
    this.$rootScope.$apply();
  });

  it('should send data to the server', () => {

    let expectUrl = 'http://localhost:3000/api/signup';
    let expectBody = {
      username: 'testingusername',
      password: 'password123',
      email: 'testemail@email.com',
    };

    let expectHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
//make the request
    this.signupCtrl.user = {
      username: 'testingusername',
      password: 'password123',
      email: 'testemail@email.com',
    };

    this.signupCtrl.$onInit();
    this.$httpBackend.expectPOST(expectUrl, expectBody, expectHeaders)
    .respond(200, 'exampletoken1234');
    let runSignup = () => {
      this.signupCtrl.signup(this.signupCtrl.user);
    };
    expect(runSignup).not.toThrow();
  });
});
