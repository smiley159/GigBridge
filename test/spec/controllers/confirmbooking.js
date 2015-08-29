'use strict';

describe('Controller: ConfirmbookingCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var ConfirmbookingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmbookingCtrl = $controller('ConfirmbookingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
