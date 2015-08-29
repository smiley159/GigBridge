'use strict';

/**
 * @ngdoc filter
 * @name angelHackApp.filter:genreFilter
 * @function
 * @description
 * # genreFilter
 * Filter in the angelHackApp.
 */
angular.module('angelHackApp')
  .filter('genreFilter', function () {
    return function (genres) {

   	var g = [ 
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
      var temp ='';
      var x;

      for (x in genres) {

    		temp += g[parseInt(genres[x])-1].label+", ";
		};

    if(temp.length>30){
      temp = temp.substring(0,28)+"...";

    }else{
      temp = temp.substring(0,temp.length-2);
    };
		

		return temp;
    };
  });
