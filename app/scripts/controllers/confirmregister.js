'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ConfirmregisterCtrl
 * @description
 * # ConfirmregisterCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('ConfirmregisterCtrl', function ($scope,$modalInstance) {
     $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
