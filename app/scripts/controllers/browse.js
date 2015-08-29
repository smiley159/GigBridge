'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:BrowseCtrl
 * @description
 * # BrowseCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('BrowseCtrl', function ($scope,$log,browse,$rootScope) {
 	$scope.bands = browse.getBrowse();
    $rootScope.$on('browse', function(event) {
    $scope.bands = browse.getBrowse();
  });
    });
