'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('NavbarCtrl', function ($scope,authFactory,$modal,$log,facebook,$rootScope,$location,$http) {

    window.fbAsyncInit = function() {
  FB.init({
    appId      : '1645888542315399',
    xfbml      : true,
    version    : 'v2.4'
  });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

   
   $scope.userObject = authFactory.getUserObject();
   
    // $rootScope.$on('loginSuccess', function(event) {
    //  $scope.userObject = authFactory.getUserObject();

    //  });

  	
    
    $scope.isLogin = function(){

      return authFactory.isLogin();
    }


    $scope.login = function(){


      $('#navigation').hide('fade');

      var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'views/loginmodal.html',
      controller: 'LoginmodalCtrl',
      size: 'sm',
      resolve: {},
      
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
        $('#navigation').show('fade');
    });
    }

    $rootScope.$on('login',function(){
      $scope.login();
    })

  

    $scope.signUp = function(){


      $('#navigation').hide('fade');

      var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'views/signupmodal.html',
      controller: 'SignupmodalCtrl',
      size: 'sm',
      resolve: {},
      
      });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
        $('#navigation').show('fade');
    });
    }

    $scope.logOut = function(){
    	facebook.logOut();
    }

 

  });
