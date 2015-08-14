'use strict';

describe('Controller: FacebookloginCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var FacebookloginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FacebookloginCtrl = $controller('FacebookloginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
