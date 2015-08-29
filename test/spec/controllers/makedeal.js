'use strict';

describe('Controller: MakedealCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var MakedealCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MakedealCtrl = $controller('MakedealCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
