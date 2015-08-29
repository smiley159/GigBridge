'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.events
 * @description
 * # events
 * Service in the angelHackApp.
 */
angular.module('angelHackApp')
  .service('events', function ($http) {
  
  var vm = this;
 	vm.getEventById = function(id){

 	var request =  $http({
 			method: "post",
 			url: "php/event.php", 
 			data: { 
 				task:'getEventById', 
 				band_id: id,
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});

 		return request;
 	
 		
 	};

 	vm.getEventByEventId = function(id){

 	var request =  $http({
 			method: "post",
 			url: "php/event.php", 
 			data: { 
 				task:'getEventByEventId', 
 				event_id: id,
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});

 		return request;
 	
 		
 	};
  });
