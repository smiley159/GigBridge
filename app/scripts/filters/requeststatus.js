'use strict';

/**
 * @ngdoc filter
 * @name angelHackApp.filter:requestStatus
 * @function
 * @description
 * # requestStatus
 * Filter in the angelHackApp.
 */
angular.module('angelHackApp')
  .filter('requestStatus', function () {
    return function (input) {
      if(input==1){
      	return 'Planner Request'
      }else if(input==2){
      	return  'Wait for planner payment'
      }else if(input==3){
      	return  'Accepted'
      }else if(input==4){
      	return  'Played'
      }
    };
  });
