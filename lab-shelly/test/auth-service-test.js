'use strict';

describe('Auth Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($httpBackend, $window, $rootScope, authService) => {
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');
      this.authService.getToken()
      .then(token => {
        expect(token).toEqual(this.$window.localStorage.token);
      })
      .catch(err => {
        expect(err).to.Equal(null);
      });
    });
  });

});
