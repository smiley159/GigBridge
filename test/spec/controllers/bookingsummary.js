'use strict';

describe('Controller: BookingsummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var BookingsummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookingsummaryCtrl = $controller('BookingsummaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
