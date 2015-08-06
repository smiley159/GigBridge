'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
