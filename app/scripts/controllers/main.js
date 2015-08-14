'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angelHackApp
 */
angular.module('angelHackApp')
  .controller('MainCtrl', function ($scope,$modal,$log,Band,allBands) {

   

      $(function(){
      $(".player").YTPlayer();
    });
      

    $("#Browse").click(function() {
    $('html,body').animate({
        scrollTop: $("#test").offset().top-50},
        'slow');
    });

    //carousel

    $('#myCarousel').carousel({
  interval: 2000
  })

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

//carousel Done

    $scope.tests = allBands.data;
    console.log(allBands.data);
    

    //Modal

    

    //End Modal

    


  });
