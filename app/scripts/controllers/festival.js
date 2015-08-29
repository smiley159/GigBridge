'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:FestivalCtrl
 * @description
 * # FestivalCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('FestivalCtrl', function ($scope,browse) {
 $scope.genres  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
    var request = browse.getBandByGenre($scope.genres);
    request.success(function(response){
    	$scope.bands = response;
    
    });
  });
