'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.authFactory
 * @description
 * # authFactory
 * Factory in the angelHackApp.
 */
angular.module('angelHackApp')
  .factory('authFactory', function ($cookies) {
    var vm = this;
     var authfact = {};
    vm.isLogin = false;
    authfact.setAccessToken = function(accessToken){
      
      $cookies.put('accessToken', accessToken);  
          


    }

    authfact.getAccessToken = function(){
      authfact.accessToken = $cookies.get('accessToken');
      return  authfact.accessToken;
    }

    authfact.getUserObject = function(){
      var userObject = $cookies.getObject('userObject');
      if(userObject){
  
        return userObject
      }else{
       
        return null;
      }
    }

     authfact.isLogin = function(){
      if(authfact.getUserObject()!=null){
        return true;
      }else{
        return false;
      }
    }

    return authfact;

   
  });
