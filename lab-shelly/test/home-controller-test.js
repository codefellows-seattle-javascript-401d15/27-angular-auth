'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the home controller', function () {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      this.homeCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should have a title', () => {
    expect(this.homeCtrl.title).toBe('Welcome Home');
  });

});
