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

 		console.log(id);
 		var request = $http({
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
  });
