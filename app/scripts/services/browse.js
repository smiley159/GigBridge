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
 	this.browse = function(name,price,date){
 	vm.bands ={};

 	console.log(name);
 	console.log(price);
 	console.log(date);

 		var request =  $http({
 			method: "post",
 			url: "php/browse.php", 
 			data: { 
 				task:'browseBand', 
 				band_name:name,
 				band_price:price,
 				date:date 
 			}, 
 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

 		});

 		request.success(function(response){
 			console.log(response);
 			localStorageService.set('browse',response);
 			$rootScope.$emit('browse');
 			$location.path('search');
 		});
 	}

 	this.getBrowse = function(){
 		return localStorageService.get('browse');

 	}

 	});
