'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  '$window',
  function($q, $log, $http, $window, authService) {
    $log.debug('authService');

    let service = {};
    let token = null;

    function setToken(_token) {
      $log.debug('authService.setToken()');

      if(!_token) return $q.reject(new Error('Token Does Not Exist'));
      $window.localStorage.setItem('token', _token);
      token = _token;

      return $q.resolve(token);
    }

    service.getToken = function() {
      $log.debug('authService.getToken()');

      if(token) return $q.resolve(token);
      token = $window.localStorage.getItem('token');
      if(token) return $q.resolve(token);

      return $q.reject(new Error('Token not found.'));
    };

    service.logout = function() {
      $log.debug('authService.logout()');

      $window.localStorage.removeItem('token');
      token = null;

      return $q.resolve();
    };

    service.deleteToken = function() {
      $log.debug('authService.deleteToken()');

      if(token) $window.localStorage.removeItem('token');
      token = null;

      return $q.resolve();
    };

    service.signup = function(user) {
      $log.debug('authService.signup()');

      let url = `${__API_URL__}/api/signup`;
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };

      return $http.post(url, user, config)
      .then(res => {
        $log.log('success', res.data);
      })
      .catch(err => {
        $log.error('failure', err);
      });
    };

    service.signin = function(user) {
      $log.debug('authService.signin()');

      let url = `${__API_URL__}/api/signin`;
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };

      return $http.get(url, user, config)
      .then(res => {
        $log.log('success', res.data);
      })
      .catch(err => {
        $log.error('failure', err);
      });
    };

    return service;
  }
];
