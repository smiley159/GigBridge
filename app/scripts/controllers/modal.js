'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the angelHackApp
 */
 angular.module('angelHackApp')
 .controller('ModalCtrl', function ($scope,$location,items,$timeout,videos,sound,eventsList,profile,$modalInstance,authFactory) {


    //modal//

    $scope.viewProfile = function(){
      profile.setBand(items);
      profile.setVideos(videos.data);
      profile.setEventsList(eventsList.data);
      profile.setSound(sound.data);
      $location.path('profile/'+items.band_id);

    }



      $scope.goBook = function(id){
    
      $location.path('/booking/'+id);
    

    }

  $scope.myInterval = 0;
  $scope.noWrapSlides = true;
  $scope.slides = videos.data;


    $scope.band = items;
  

    $scope.ok = function () {
      $modalInstance.close($scope.band);
    };


  
   
  if(sound.data[0] != null){
    $scope.sound = sound.data[0].sound_embed;

  }else{
    sound == null;
  }
  


    

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


