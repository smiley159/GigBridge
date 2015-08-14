'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.profile
 * @description
 * # profile
 * Service in the angelHackApp.
 */
angular.module('angelHackApp')
  .service('profile', function (localStorageService) {
  	var vm = this;
  	

      this.setBand = function(band){
      	console.log(band);
      	localStorageService.set('profileBand',band);
      	
      };

      this.getBand = function(){
      	console.log(localStorageService.get('profileBand'));

      	return localStorageService.get('profileBand');
      	

      };

      this.setVideos = function(videos){
      	localStorageService.set('profileVideos',videos);
      	vm.videos = videos;
      };

       this.getVideos= function(){
       	console.log(localStorageService.get('profileVideos'));

      	return localStorageService.get('profileVideos');

      };

      this.setEventsList = function(eventsList){
      	localStorageService.set('profileEventsList',eventsList);
      	vm.eventsList = eventsList;
      };

       this.getEventsList = function(){
       	console.log(localStorageService.get('profileEventsList'));


      	return localStorageService.get('profileEventsList');

      };

      this.setSound = function(sound){
      	localStorageService.set('profileSound',sound);
      	vm.sound = sound;
      };

       this.getSound = function(){
       	console.log(localStorageService.get('profileSound'));

      	return localStorageService.get('profileSound');

      };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
