'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:LoginmodalCtrl
 * @description
 * # LoginmodalCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('LoginmodalCtrl', function ($scope,$modalInstance,facebook) {

     $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }

    var loginModal = '<div class=" col-md-12"><label>Email</label><input type="email" placeholder ="Enter Your Email" class="form-control"><br></div><div class=" col-md-12"><label>Password</label><input type="password" placeholder ="Enter Your Password" class="form-control"><br></div><div class=" col-md-12"><input type="button"  class="btn btn-primary form-control" value="Login"></div>';

    $scope.loginArtist = function(){

    $( "div .inner" ).replaceWith(loginModal);
	};

	$scope.loginPlanner = function(){
		facebook.loginPlanner();

	}

	$scope.logOut = function(){
		facebook.logOut();
	}

  });


