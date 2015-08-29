'use strict';

describe('Controller: PlannerregisterCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var PlannerregisterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlannerregisterCtrl = $controller('PlannerregisterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
