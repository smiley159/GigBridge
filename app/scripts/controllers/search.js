'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('SearchCtrl', function ($scope,$log,browse,$rootScope) {

  	$scope.bands = browse.getBrowse();
    $rootScope.$on('browse', function(event) {
    $scope.bands = browse.getBrowse();

     });

 
  });
