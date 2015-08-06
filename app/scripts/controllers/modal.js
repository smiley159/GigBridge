'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the angelHackApp
 */
 angular.module('angelHackApp')
 .controller('ModalCtrl', function ($scope,$modalInstance, items) {


    //modal//

    $scope.items = items;
    console.log(items);

    $scope.ok = function () {
      $modalInstance.close($scope.items);
    };

    $scope.videos = [
    "gS9o1FAszdk",
    "1y6smkh6c-0",
    "3OnnDqH6Wj8",
    ];


    $scope.selected = $scope.videos[0];

    $scope.setSelected = function(select){
      $scope.selected = select;
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  //end modal


  //Calendar

  $scope.eventSources = [
  {
     events: [
        {
            title: 'Final Pitch',
            start: '2015-08-06',
            url: 'http://smilehavetime.com/app'
        },
        // other events here
    ]
  }
  ];


  $scope.calendar = { 
      
      header:{
        left: 'today prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay',
      },
      dayClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventLimit: true,
      eventClick: function(event) {
        if (event.url) {
            window.open(event.url);
            return false;
        }
      }
    
  };


  



    //end calendar

  });


