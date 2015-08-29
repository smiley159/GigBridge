'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:WeddingCtrl
 * @description
 * # WeddingCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('WeddingCtrl', function ($scope,browse) {

    $scope.genres  = [3,6,8,9,10];
    var request = browse.getBandByGenre($scope.genres);
    request.success(function(response){
    	$scope.bands = response;
    
    });

  });
