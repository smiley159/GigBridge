'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:MyeventCtrl
 * @description
 * # MyeventCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('MyeventCtrl', function ($scope,$routeParams,booking) {


   
 	var request = booking.getRequestByBookerId($routeParams.id);
 

 	request.success(function(response){
 
 		$scope.events = response;
 		$('#table').load();
 	}).error(function(){
 
 	});

  });
