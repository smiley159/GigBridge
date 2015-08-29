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
    'ngSanitize',
    'ui.bootstrap',
    'youtube-embed',
    'ui.calendar',
    'angularjs-dropdown-multiselect',
    'LocalStorageModule',
    'ngFileUpload',
    'ngCkeditor',
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
      .when('/profile/:id', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/booking/:id', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl'
      })
      .when('/artistRegister', {
        templateUrl: 'views/artistpofile.html',
        controller: 'ArtistpofileCtrl'
      })
      .when('/loginModal', {
        templateUrl: 'views/loginmodal.html',
        controller: 'LoginmodalCtrl'
      })
      .when('/signUpModal', {
        templateUrl: 'views/signupmodal.html',
        controller: 'SignupmodalCtrl'
      })
      .when('/makeDeal', {
        templateUrl: 'views/makedeal.html',
        controller: 'MakedealCtrl'
      })
      .when('/bookingSummary/:id', {
        templateUrl: 'views/bookingsummary.html',
        controller: 'BookingsummaryCtrl'
      })
      .when('/myEvent/:id', {
        templateUrl: 'views/myevent.html',
        controller: 'MyeventCtrl'
      })
      .when('/plannerRegister', {
        templateUrl: 'views/plannerregister.html',
        controller: 'PlannerregisterCtrl'
      })
      .when('/confirmBooking', {
        templateUrl: 'views/confirmbooking.html',
        controller: 'ConfirmbookingCtrl'
      })
      .when('/confirmRegister', {
        templateUrl: 'views/confirmregister.html',
        controller: 'ConfirmregisterCtrl'
      })
      .when('/wedding', {
        templateUrl: 'views/wedding.html',
        controller: 'WeddingCtrl'
      })
      .when('/party', {
        templateUrl: 'views/party.html',
        controller: 'PartyCtrl'
      })
      .when('/festival', {
        templateUrl: 'views/festival.html',
        controller: 'FestivalCtrl'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl'
      })
  
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('angelHackApp').run(["$rootScope","$location","authFactory",function($rootScope,$location,authFactory){

   $rootScope.$on('$locationChangeStart', function(event, next, current) {


    var booking = next.indexOf('booking');
   
    if(booking!=-1){   
          if(!authFactory.isLogin()){
 
              event.preventDefault();
            
               $rootScope.$emit('login');
           
          }else{
       
          }
    }
    });

 }]);

// angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
//     .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function        ($scope, $timeout, $transition, $q) {
// }]).directive('carousel', [function() {
//     return {

//     }
// }]);



