'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.signUpArtist
 * @description
 * # signUpArtist
 * Service in the angelHackApp.
 */
angular.module('angelHackApp')
  .service('signUpArtist', function () {
    var vm = this;
 	vm.signUpArtist = function(artist){
 	

 		var request = $http({
 			method: "post",
 			url: "php/sigup.php", 
 			data: { 
 				task:'signUpArtist',
 				artist: artist,    
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});
 	
 		return request;
 	};
  });
