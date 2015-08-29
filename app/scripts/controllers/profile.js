'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('ProfileCtrl', function ($scope,profile,$window,authFactory,$location,Band,$routeParams,Video,SoundCloud) {


$scope.videos = profile.getVideos();
$scope.sound = profile.getSound();
$scope.eventsList =profile.getEventsList();

var band = Band.getBandById($routeParams.id);
band.success(function(response){

  $scope.band = response[0];
});

var video = Video.getVideoById($routeParams.id);
video.success(function(response){
  
  $scope.video = response;
});

var sound = SoundCloud.getSoundById($routeParams.id);
sound.success(function(response){
 
  $scope.sound = response[0];
});

  if($scope.videos.length!=0){
    $scope.selected = $scope.videos[0].youtube_id;
  };

    $scope.setSelected = function(select){
      $scope.selected = select;
    }

  

   $scope.tests = ["Aey.jpg","Chote.jpg","Festival.jpeg","Party.jpg","Public.jpeg","Wedding.jpg"];
   

    $scope.setSelected = function(select){
      $scope.selected = select;
    }

    $scope.goBook = function(){
   
      $location.path('/booking/'+$scope.band.band_id);
   

    }

 


  });
