'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.facebook
 * @description
 * # facebook
 * Service in the angelHackApp.
 */
 angular.module('angelHackApp')
 .service('facebook', function ($cookies,$location,$http,authFactory,$route,$rootScope,$window) {

  var vm = this;

  this.signUpPlanner = function(user){

  FB.login(function(response) {

   if (response.authResponse) {
     FB.api('/me', function(response) {

      var request = $http({
        method: "post",
        url: "php/eventPlanner.php", 
        data: { 
          task: 'searchUserById',
          facebook_id: response.id,
        }, 

        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

      }); 

      request.success(function(data) {
        

        if(data.length==0){

          var request2 = $http({
            method: "post",
            url: "php/eventPlanner.php", 
            data: { 
              task: 'addUser',
              facebook_id: response.id,
              user: user,
            }, 

            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

          }); 

          request2.success(function(response) {
             vm.loginPlanner();
          });


        }else{
          vm.loginPlanner();
          
        }

      });


        });


    } else {
     
   }

 });

};

  vm.loginPlanner = function(){
    FB.login(function(response) {
     if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
           
          var request = $http({
          method: "post",
          url: "php/eventPlanner.php", 
          data: { 
            task: 'searchUserById',
            band: response,
          }, 

          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

        }); 

        request.success(function(user) {
         
        $cookies.putObject('userObject',user[0]);
        var accessToken = FB.getAuthResponse().accessToken;     
        authFactory.setAccessToken(accessToken);
       

        }).error(function(user){
          
        }).then(function(){

         
           $window.location.reload();

        });
      });
       

     } else {
       
     }

   },{
   	scope:'email'
   });

};



this.logOut = function(){

  $cookies.remove('accessToken');
  $cookies.remove('userObject');
  
   $window.location.reload();
  
};
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
