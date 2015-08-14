'use strict';

/**
 * @ngdoc filter
 * @name angelHackApp.filter:dateTime
 * @function
 * @description
 * # dateTime
 * Filter in the angelHackApp.
 */
angular.module('angelHackApp')
  .filter('dateTime', function () {
    return function (input) {
      return input.substring(0,input.indexOf('T'));
    };
  });
