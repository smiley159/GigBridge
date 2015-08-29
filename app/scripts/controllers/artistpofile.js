'use strict';

/**
 * @ngdoc function
 * @name angelHackApp.controller:ArtistpofileCtrl
 * @description
 * # ArtistpofileCtrl
 * Controller of the angelHackApp
 */
 angular.module('angelHackApp')
 .controller('ArtistpofileCtrl', function ($scope,Upload,$modal,$log,$location,email) {

  $scope.artist = {};
  $scope.editorOptions = {
    language: 'en',
    resize_enabled: false,
    height: 150,
    removePlugins:'toolbar,elementspath',

  }; 

//////
$scope.youtubeIndex = [{},];
$scope.youtube = [];
$scope.addYoutube = function(){
 $scope.youtubeIndex.push({});
}
$scope.removeYoutube = function(index){
 $scope.youtube.splice(index,1);
 $scope.youtubeIndex.splice(0,1);
}

$scope.$watch('youtubeIndex', function (value) {

}, true);
$scope.$watch('youtube', function (value) {

}, true);

///////

    // $scope.memberIndex = [{},];
    // $scope.member = [];
    // $scope.addMember = function(){
    // 	$scope.memberIndex.push({});
    // }
    // $scope.removeMember = function(index){
    // 	$scope.member.splice(index,1);
    // 	$scope.memberIndex.splice(0,1);
    // }

    //   $scope.$watch('memberIndex', function (value) {
    //     console.log(value);
    // }, true);
    //     $scope.$watch('member', function (value) {
    //     console.log(value);
    // }, true);
///////



/* optional: set default directive values */
    //Upload.setDefaults( {ngf-keep:false ngf-accept:'image/*', ...} );

    $scope.submit = function () {

      $scope.artist.genres = $scope.genres;
      $scope.artist.youtube = $scope.youtube;

      console.log($scope.artist);

      Upload.upload({
        url: 'php/signup.php',
        fields: {
          artist: $scope.artist,
          task: 'signUpArtist',
        },
        file: $scope.profile,

      }).success(function (data,status,headers,config) {

        email.signUpEmail($scope.artist.email);
        console.log(data);
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'views/confirmregister.html',
          controller: 'ConfirmregisterCtrl',
          size: 'sm',

        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
          $location.path('#/');
        });

      });
    };


    $scope.genres = [];

    $scope.genresData = [ 

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

    $scope.genresSetting = {
      enableSearch: true,
      showCheckAll: false,
      showUncheckAll: false,
      groupByTextProvider: function(groupValue) { 
        if (groupValue === 'dj') {
         return 'Dee Jay'; 
       } else { 
        return 'Band'; } 
      },

    };



  });

