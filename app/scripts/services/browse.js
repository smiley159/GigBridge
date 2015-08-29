'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.browse
 * @description
 * # browse
 * Service in the angelHackApp.
 */
 angular.module('angelHackApp')
 .service('browse', function ($http,$location,localStorageService,$rootScope) {

var vm = this;
 	this.browse = function(name,price,genres){
 	vm.bands ={};


 		var request =  $http({
 			method: "post",
 			url: "php/browse.php", 
 			data: { 
 				task:'browseBand', 
 				band_name:name,
 				band_price:price,
 				band_genres:genres ,
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});

 		request.success(function(response){

 			localStorageService.set('browse',response);
 			$rootScope.$emit('browse');
 			$location.path('search');
 		});
 	};

 	this.getBrowse = function(){
 		return localStorageService.get('browse');

 	};

 	this.getBandByGenre = function(genres){

 		var request =  $http({
 			method: "post",
 			url: "php/band.php", 
 			data: { 
 				task:'getBandByGenre', 
 				band_genres:genres ,
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});

 		return request;
 	}

 	});
