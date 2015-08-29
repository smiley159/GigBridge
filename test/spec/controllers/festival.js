'use strict';

describe('Controller: FestivalCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var FestivalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FestivalCtrl = $controller('FestivalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
