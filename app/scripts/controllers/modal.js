'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the angelHackApp
 */
 angular.module('angelHackApp')
 .controller('ModalCtrl', function ($scope,$location,$modalInstance, items,$timeout,videos,sound,eventsList,profile) {


    //modal//

    $scope.viewProfile = function(){
      profile.setBand(items);
      profile.setVideos(videos.data);
      profile.setEventsList(eventsList.data);
      profile.setSound(sound.data);
      $location.path('profile');

    }

    $scope.band = items;
    console.log($scope.band);

    $scope.ok = function () {
      $modalInstance.close($scope.band);
    };

  
  

      $scope.videos = videos.data;
      $scope.selected = $scope.videos[0].youtube_id;

  
      console.log(sound.data);
      $scope.sound = sound.data[0].sound_embed;


    

    $scope.setSelected = function(select){
      $scope.selected = select;
      
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  //end modal


  //Calendar

  $scope.renderCalendar = function (calendarId) {
    $timeout(function () {
        var calendarTag = $('#' + calendarId);
        $scope.calendarId = calendarId;
        calendarTag.fullCalendar('render');
    }, 0);
};

$scope.eventsList = [
       {
            title  : 'event1',
            start  : '2015-08-01'
        },
        {
            title  : 'event2',
            start  : '2015-08-05',
            end    : '2015-08-07'
        },
        // other events here
    ];

    console.log(eventsList.data);
    
$scope.eventSources = [
  {
     events: eventsList.data,
  }
  ];




// $scope.eventPromise = events.getEventById($scope.band.band_id);
// $scope.eventPromise.success(function(response){

//   var test =  $scope.eventsList.slice(0, $scope.eventsList.length);
//   for(var i = 0; i < response.length; ++i) {
//     var temp = {title : response[i].title, start: response[i].start};
//       $scope.eventsList.push(temp);
//   }

//   $scope.eventsList = temp;

//   $('#someCalendarId').fullCalendar('refetchEvents');

  
// });

  

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
            $('#someCalendarId').fullCalendar( 'addEventSource',$scope.eventsList );
            return false;
        }
      }
    
  };


  



    //end calendar

  });


