'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:SignupmodalCtrl
 * @description
 * # SignupmodalCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('SignupmodalCtrl', function ($scope,$window,$modalInstance,facebook) {
    
     $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    	};

  	$scope.signUpArtist = function(){
  		$window.open('#/artistRegister');
  		$scope.cancel();
  	};

      $scope.signUpPlanner = function(){
        $window.open('#/plannerRegister');
   
    };

    $scope.loginPlanner =function(){
      facebook.loginPlanner();
    }





	
  });
