'use strict';

describe('Controller: ArtistpofileCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var ArtistpofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtistpofileCtrl = $controller('ArtistpofileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
