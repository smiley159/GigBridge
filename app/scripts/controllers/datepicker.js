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

      browse.browse($scope.name,$scope.price,$scope.genres);
   
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

    $scope.genres = []; 
      $scope.example9data = [ 
       {id: 1, label: "Alternative"},
      {id: 2, label: "Blues"},
      {id: 3, label: "Classical"},
       {id: 4, label: "Country"},
      {id: 5, label: "Electronic"},
      {id: 6, label: "Funk/Soul"},
       {id: 7, label: "HipHop/Rap"},
       {id: 8, label: "Jazz"},
       {id: 9, label: "Pop"},
      {id: 10, label: "R&B/Soul"},
       {id: 11, label: "Reggae/Ska"},
      {id: 12, label: "Rock"},
      {id: 13, label: "Thai Country"},
      {id: 14, label: "Disco",type:"dj"},
      {id: 15, label: "Drum&Bass",type:"dj"},
      {id: 16, label: "Dubstep",type:"dj"},
      {id: 17, label: "Electro",type:"dj"},
      {id: 18, label: "Commercial",type:"dj"},
      {id: 19, label: "EDM",type:"dj"},
      {id: 20, label: "House Music",type:"dj"},
      {id: 21, label: "Techno",type:"dj"},
      {id: 22, label: "Trance",type:"dj"},

      ];

     $scope.example9settings = {
      enableSearch: true,
      showCheckAll: false,
      showUncheckAll: false,
      scrollable:true,
      groupByTextProvider: function(groupValue) { 
        if (groupValue === 'dj') {
         return 'DJ'; 
       } else { 
        return 'Band'; } 
      },

    };

    $scope.artistName = {};

//end DatePicker
});
