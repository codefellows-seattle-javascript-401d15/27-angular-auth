'use strict'

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  $urlRouterProvider.when('', '/join#signup'),
  $urlRouterProvider.when('/', '/join#signup'),
  $urlRouterProvider.when('/signup', '/join#signup'),
  $urlRouterProvider.when('/login', '/join#login'),

  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home')
    let routes = [
      {
        name: 'home',
        url: '/home',
        template: require('../view/home/home.html'),
        controller: 'HomeContriller',
        controllerAs: 'homeCtrl'
      },
      {
        name: 'landing',
        url: '/joinlandingcontroller', //maybe??
        template: require('../view/landing/landing.html'),
        controller: 'LandingController',
        controllerAs: 'landingCtrl'
      }
    ]
    routes.forEach(route => $stateProvider.state(route))
  }
]
