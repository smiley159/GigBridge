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

      	localStorageService.set('profileBand',band);
      	
      };

      this.getBand = function(){
    

      	return localStorageService.get('profileBand');
      	

      };

      this.setVideos = function(videos){
      	localStorageService.set('profileVideos',videos);
      	vm.videos = videos;
      };

       this.getVideos= function(){


      	return localStorageService.get('profileVideos');

      };

      this.setEventsList = function(eventsList){
      	localStorageService.set('profileEventsList',eventsList);
      	vm.eventsList = eventsList;
      };

       this.getEventsList = function(){
     

      	return localStorageService.get('profileEventsList');

      };

      this.setSound = function(sound){
      	localStorageService.set('profileSound',sound);
      	vm.sound = sound;
      };

       this.getSound = function(){


      	return localStorageService.get('profileSound');

      };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
