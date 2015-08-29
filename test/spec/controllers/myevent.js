'use strict';

describe('Controller: MyeventCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var MyeventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyeventCtrl = $controller('MyeventCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
