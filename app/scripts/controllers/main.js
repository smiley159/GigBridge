'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('MainCtrl', function ($scope,$modal, $log) {


    $scope.tests = ["1.jpeg","2.jpg","3.jpeg","4.jpeg","5.jpg","6.jpeg"];



    $scope.open = function(image){
    	$scope.image = image;

    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'views/modal.html',
      controller: 'ModalCtrl',
      size: 'md',
      resolve: {
        items: function () {
          return $scope.image;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
    }


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




  });
