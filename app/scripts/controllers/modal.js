'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('ModalCtrl', function ($scope,$modalInstance, items) {
    $scope.items = items;
    console.log(items);

  $scope.ok = function () {
    $modalInstance.close($scope.items);
  };

  $scope.videos = [
  "gS9o1FAszdk",
  "1y6smkh6c-0",
  "3OnnDqH6Wj8",
  ];

  $scope.selected = $scope.videos[0];

  $scope.setSelected = function(select){
  	$scope.selected = select;
  }

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  });
