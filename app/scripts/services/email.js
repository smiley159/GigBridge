'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.email
 * @description
 * # email
 * Service in the angelHackApp.
 */
angular.module('angelHackApp')
  .service('email', function ($http) {


  	  this.signUpEmail = function(email){
      var request =  $http({
            method: "post",
            url: "php/email_form.php", 
            data: {
            	task:'signUp', 
               email: email,
           }, 
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

       });

      request.success(function(response){
        console.log(response);
      })
    };

     this.bookingEmail = function(email){
      var request =  $http({
            method: "post",
            url: "php/email_form.php", 
            data: { 
            	task:'booking', 
               email: email,
           }, 
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

       });

      request.success(function(response){
        console.log(response);
      })
    };
   
  });
