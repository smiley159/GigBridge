'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:BookingCtrl
 * @description
 * # BookingCtrl
 * Controller of the angelHackApp
 */
 angular.module('angelHackApp')
 .controller('BookingCtrl', function ($scope,$routeParams,booking,$log,$modal,authFactory,Band) {

  if(!authFactory.isLogin()){
     $location.path('/#/');
   }

    $scope.editorOptions = {
    language: 'en',
    resize_enabled: false,
    height: 150,
    removePlugins:'toolbar,elementspath',

  };

    $scope.band_id = $routeParams.id;
   
    var userObject = authFactory.getUserObject();

   

   var request = Band.getBandById($scope.band_id);

   request.success(function(response){
   
    $scope.band = response[0];
   });

 
    

    $scope.toggle = function(id){
        if(id==1){
          $scope.event.kind = "amplified";
            $('#kind1').addClass('active');
            $('#kind2').removeClass('active');
        }else{
          $scope.event.kind = "acoustic";
            $('#kind2').addClass('active');
            $('#kind1').removeClass('active');
        }
    }






  $scope.booker = {};
  $scope.event = {};
  $scope.offer = {};


  $scope.booker.email =  userObject.email;
  $scope.booker.first_name =  userObject.first_name;
  $scope.booker.last_name =  userObject.last_name;
  $scope.booker.line =  userObject.line;
  $scope.booker.number =  userObject.phone_number;

  $scope.bookArtist = function(){

    $scope.offer.id = $routeParams.id;
    $scope.booker.id = userObject.facebook_id;


  

      var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'views/confirmbooking.html',
      controller: 'ConfirmbookingCtrl',
      size: 'sm',
      resolve: {
        booker: function(){
          return $scope.booker;
        },
        event: function(){
          return $scope.event;
        },
        offer: function(){
          return $scope.offer;
        },

      },
      
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
   
      
    }

    );
   

  }


 

  $scope.today = function() {
    $scope.date = new Date();
  };

  $scope.today();

  $scope.dateOpen = function($event) {
    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,

  };

  $scope.items = [
    '0:30',
    '1:00',
    '1:30',
    '2:00',
    '2:30',
    '3:00',
    '3:30',
    '4:00',
    '4:30',
    '5:00',
    '5:30',
    '6:00',
    '6:30',
    '7:00',
    '7:30',
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
    '24:00'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.m = "AM";

  $scope.event.time="12:00";

  $scope.toggleM = function(){
    if($scope.m == "AM"){
      $scope.m = "PM";
    }else{
      $scope.m ="AM";
    }
  }

  $scope.setTime = function(time){
    $scope.event.time = time;
  }

  $scope.toggled = function(open) {
    // $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };




  // $scope.makeDeal = function(){


  //   $('#navigation').hide('fade');

  //   var modalInstance = $modal.open({
  //     animation: true,
  //     templateUrl: 'views/makedeal.html',
  //     controller: 'MakedealCtrl',
  //     size: 'md',
  //     resolve: {}
      
  //   });

  //   modalInstance.result.then(function (selectedItem) {
  //     $scope.selected = selectedItem;
  //   }, function () {
  //     $log.info('Modal dismissed at: ' + new Date());
  //     $('#navigation').show('fade');
  //   });
    

  // }

});
