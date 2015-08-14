'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:DatepickerCtrl
 * @description
 * # DatepickerCtrl
 * Controller of the angelHackApp
 */
 angular.module('angelHackApp')
 .controller('DatepickerCtrl', function ($scope,browse) {

  $scope.name;
  $scope.price;
  $scope.dt;
    //DatePicker

    $scope.browse = function(){

      browse.browse($scope.name,$scope.price,$scope.dt);
   
    };

     


    $scope.today = function() {
      $scope.dt = new Date();
    };
    


    $scope.dateOpen = function($event) {
      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,

    };

    //genre

 $scope.genres = ["Genre","Alternative","Blues","Classical","Country","Dance","Electronic","Folk","HipHop/Rap",
    "Indie Pop","Indie Rock","Jazz","Latin","Opera","Pop","R&B/Soul","Reggae","Rock"];

    $scope.example9model = []; 
    $scope.example9data = [ 
      {id: 1, label: "Genre"},
       {id: 2, label: "Alternative"},
      {id: 3, label: "Blues"},
      {id: 4, label: "Classical"},
       {id: 5, label: "Country"},
      {id: 6, label: "Dance"},
      {id: 7, label: "Electronic"},
       {id: 8, label: "HipHop/Rap"},
      {id: 9, label: "Indie Pop"},
      {id: 10, label: "Indie Rock"},
       {id: 11, label: "Jazz"},
      {id: 12, label: "Latin"},
      {id: 13, label: "Opera"},
       {id: 14, label: "Pop"},
      {id: 15, label: "R&B/Soul"},
       {id: 16, label: "Reggae"},
      {id: 17, label: "Rock"},
      {id: 18, label: "Deep House",type:"dj"},
      {id: 19, label: "EDM",type:"dj"},



      ]; 

     $scope.example9settings = {
      enableSearch: true,
      showCheckAll: false,
      showUncheckAll: false,
      groupByTextProvider: function(groupValue) { 
        if (groupValue === 'dj') {
         return 'Dee Jay'; 
       } else { 
        return 'Band'; } 
      },

    };

    $scope.artistName = {};

//end DatePicker
});
