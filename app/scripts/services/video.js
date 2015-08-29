'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.Video
 * @description
 * # Video
 * Service in the angelHackApp.
 */
 angular.module('angelHackApp')
 .service('Video', function ($http) {

 	var vm = this;
 	vm.getVideoById = function(id){

 		
 		var request = $http({
 			method: "post",
 			url: "php/video.php", 
 			data: { 
 				task:'getVideoById',
 				band_id: id,     
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});
 	
 		return request;
 	};

 });
