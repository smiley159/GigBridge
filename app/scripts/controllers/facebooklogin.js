'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:FacebookloginCtrl
 * @description
 * # FacebookloginCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('FacebookloginCtrl', function ($scope,authFactory,$cookies,$location,$http) {

  $scope.FBLogin = function(){
    FB.login(function(response) {
     if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {

        response.profilePicture = ("http://graph.facebook.com/" + response.id + "/picture?type=");
        var accessToken = FB.getAuthResponse().accessToken;
        authFactory.setAccessToken(accessToken);
        var request = $http({
          method: "post",
          url: "php/user.php", 
          data: { 
            task: 'addUser',
            userId: response.id,
            username: response.name,
            profilePicture: response.profilePicture,
          }, 

          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

        }); 

        request.success(function(user) {
          response.status = user[0].status;
        }).then(function(){
          console.log('Good to see you, ' + response.name + '.');
        console.log(response);   
        $cookies.putObject('userObject',response);
        $location.path('/');
        });

      
      });
       

     } else {
       console.log('User cancelled login or did not fully authorize.');
     }
   });



};

$scope.FBLogout = function(){
  console.log(authFactory.getAccessToken());
  $cookies.remove('accessToken');
  console.log(authFactory.getAccessToken());
  $location.path('login');
};
});
