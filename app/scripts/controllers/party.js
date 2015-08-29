'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:PartyCtrl
 * @description
 * # PartyCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('PartyCtrl', function ($scope,browse) {
 $scope.genres  = [5,6,7,8,10,11,12,14,15,16,17,18,19,20,21,22];
    var request = browse.getBandByGenre($scope.genres);
    request.success(function(response){
    	$scope.bands = response;
    	
    });
  });
