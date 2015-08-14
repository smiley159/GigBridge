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
    'angularjs-dropdown-multiselect',
    'LocalStorageModule',
  ])
  .config(function ($routeProvider,$sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
   
    'https://*.soundcloud.com/player/**'
  ]);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve:{
       allBands: function(Band){
        return Band.allBands() //returns a promise
       }
    }
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
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1596286980637201',
    xfbml      : true,
    version    : 'v2.4'
  });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
 

