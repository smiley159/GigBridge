'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('ProfileCtrl', function ($scope,profile) {


$scope.videos = profile.getVideos();
$scope.band = profile.getBand();
$scope.sound = profile.getSound();
$scope.eventsList =profile.getEventsList();


    $scope.selected = $scope.videos[0].youtube_id;

    $scope.setSelected = function(select){
      $scope.selected = select;
    }

  

   $scope.tests = ["1.jpeg","2.jpg","3.jpeg","4.jpeg","5.jpg","6.jpeg"];
   

    $scope.setSelected = function(select){
      $scope.selected = select;
    }

  });
