'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:DatepickerCtrl
 * @description
 * # DatepickerCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('DatepickerCtrl', function ($scope) {
    //DatePicker


   $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();


  $scope.dateOpen = function($event) {
    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,

  };

//end DatePicker
  });
