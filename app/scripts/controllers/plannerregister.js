'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:PlannerregisterCtrl
 * @description
 * # PlannerregisterCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('PlannerregisterCtrl', function ($scope,facebook) {
    $scope.user = {};
    $scope.register = function(){
   
    	facebook.signUpPlanner($scope.user);
    }
  });
