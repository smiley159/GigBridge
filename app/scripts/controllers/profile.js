'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('ProfileCtrl', function ($scope) {


 $scope.videos = [
    "pB-5XG-DbAA",
    "1y6smkh6c-0",
    "3OnnDqH6Wj8",
    ];


    $scope.selected = $scope.videos[0];

    $scope.setSelected = function(select){
      $scope.selected = select;
    }

   $(function(){
      $(".player").YTPlayer();
    });

   $scope.tests = ["1.jpeg","2.jpg","3.jpeg","4.jpeg","5.jpg","6.jpeg"];
   

    $scope.setSelected = function(select){
      $scope.selected = select;
    }

  });
