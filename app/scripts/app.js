'use strict';

/**
 * @ngdoc overview
 * @name angelHackApp
 * @description
 * # angelHackApp
 *
 * Main module of the application.
 */
angular
  .module('angelHackApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'youtube-embed',
    'ui.calendar',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/modal', {
        templateUrl: 'views/modal.html',
        controller: 'ModalCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
