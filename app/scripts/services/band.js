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

 	this.getBandById = function(id){

 			var request =  $http({
            method: "post",
            url: "php/band.php", 
            data: { 
               task:'getBandById',
               band_id: id,
           }, 
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

       });

     return request;
 	}

 	this.getAllBand = function(){

 			var request = $http({
 			method: "post",
 			url: "php/band.php", 
 			data: { 
 				task:'getAllBand',     
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});
 	return request;
 	}



});
