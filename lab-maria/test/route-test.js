'use strict';

const angular = require('angular');
require('angular-mocks');

describe('homeCtrl', function() {
  beforeEach(() => {
    console.log('WAT');
    angular.mock.module('cfgram');
    console.log('mounted cfgram');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      this.homeCtrl.$onInit();
    });
  });

  // afterEach(() => this.$rootScope.$apply());

  describe('foo', function() {
    it('should pass', function() {
      expect(true).to.equal(true);
    });
  });
});
