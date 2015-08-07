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
    $scope.genres = ["Genre","Alternative","Blues","Classical","Country","Dance","Electronic","Folk","HipHop/Rap",
    "Indie Pop","Indie Rock","Jazz","Latin","Opera","Pop","R&B/Soul","Reggae","Rock"];

    //Modal

    $scope.open = function(image){
    	$scope.image = image;

      $('#navigation').hide('fade');

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
        $('#navigation').show('fade');
    });
    }

    //End Modal

    


  });
