'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.SoundCloud
 * @description
 * # SoundCloud
 * Service in the angelHackApp.
 */
angular.module('angelHackApp')
  .service('SoundCloud', function ($http) {
    var vm = this;
 	vm.getSoundById = function(id){

 		var request = $http({
 			method: "post",
 			url: "php/soundCloud.php", 
 			data: { 
 				task:'getSoundById',
 				band_id: id,     
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});
 	
 		return request;
 	};
  });
