'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ConfirmbookingCtrl
 * @description
 * # ConfirmbookingCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('ConfirmbookingCtrl', function ($scope,event,offer,booker,booking,$modalInstance,$location,email) {
    
	$scope.confirm = function(){

		var request = booking.bookArtist(booker,event,offer);

		request.success(function(response){
		email.bookingEmail(booker.email);
    
        var x = response.trim().substring(1);
     
        $location.path('bookingSummary/'+parseInt(x));
    	});
		
		

	}

	 $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });
