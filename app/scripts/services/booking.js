'use strict';

/**
 * @ngdoc service
 * @name angelHackApp.booking
 * @description
 * # booking
 * Service in the angelHackApp.
 */
 angular.module('angelHackApp')
 .service('booking', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function



    var vm = this;
    this.bookArtist = function(booker,event,offer){

        var id;

    	var request =  $http({
            method: "post",
            url: "php/booking.php", 
            data: { 
               task:'bookArtist',
               booker: booker,
               event:event,
               offer: offer,
           }, 
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

       });

     return request;

 }

 this.getRequestByBookerId = function(id){


    var request =  $http({
        method: "post",
        url: "php/booking.php", 
        data: { 
            task:'getRequestByBookerId',
            id: id,
        }, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

    });

    return request;

}

this.getRequestByRequestId = function(id){


    var request =  $http({
        method: "post",
        url: "php/booking.php", 
        data: { 
            task:'getRequestByRequestId',
            id: id,
        }, 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

    });

    return request;

}



});
