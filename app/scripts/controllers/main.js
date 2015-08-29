
'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('MainCtrl', function ($scope,$modal,$log,Band) {

 

    $(function(){
      $(".player").YTPlayer();
    });
      

    $("#Browse").click(function() {
    $('html,body').animate({
        scrollTop: $("#test").offset().top-50},
        'slow');
    });


    $("#why").click(function() {
    $('html,body').animate({
        scrollTop: $("#whyLensod").offset().top-50},
        'slow');
    });

    //carousel

    $('#myCarousel').carousel({
  interval: 2000
  })



    var request = Band.getAllBand();
    request.success(function(response){
      
        $scope.bands = shuffle(response);
    });


    var shuffle= function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

    




    


  });
