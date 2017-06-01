'use strict';

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home');
    let routes = [
      {
        name: 'home',
        url: '/home',
        template: require('../view/home/home.html'),
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
      },
      {
        name: 'signup',
        url: '/signup',
        template: require('../view/signup/signup.html'),
        controller: 'SignupController',
        controllerAs: 'signupCtrl',
      },
      {
        name: 'gallery',
        url: '/gallery',
        template: require('../view/gallery/gallery.html'),
        controller: 'GalleryController',
        controllerAs: 'galleryCtrl',
      },
    ];

    routes.forEach(route => $stateProvider.state(route));
  },
];
