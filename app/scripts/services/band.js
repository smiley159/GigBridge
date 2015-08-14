'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.Band
 * @description
 * # Band
 * Service in the angelHackApp.
 */
 angular.module('angelHackApp')
 .service('Band', function ($http) {
 	var vm = this;


 	return  {
 		allBands: function(){return $http({
 			method: "post",
 			url: "php/band.php", 
 			data: { 
 				task:'getAllBand',     
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});
 	},
 };
});
