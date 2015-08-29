'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:BookingsummaryCtrl
 * @description
 * # BookingsummaryCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('BookingsummaryCtrl', function ($scope,booking,$routeParams) {

  	var request = booking.getRequestByRequestId($routeParams.id);
 

 	request.success(function(response){
 	
 		$scope.event = response[0];
 	
 	}).error(function(){
 		
 	});


 



   
  });
