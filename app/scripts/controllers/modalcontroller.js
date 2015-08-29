'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ModalcontrollerCtrl
 * @description
 * # ModalcontrollerCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('ModalControllerCtrl', function ($scope,events,Video,SoundCloud,$modal,$log) {
    $scope.open = function(band){


      $('#navigation').hide('fade');

    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'views/modal.html',
      controller: 'ModalCtrl',
      size: 'lg',
      resolve: {
        items: function () {
          return band;
        },
        eventsList: function(){
          return events.getEventById(band.band_id);
        },
        videos: function(){
          return Video.getVideoById(band.band_id);
        },
         sound: function(){
          return SoundCloud.getSoundById(band.band_id);

        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
        $('#navigation').show('fade');
    });
    }




   
  });
