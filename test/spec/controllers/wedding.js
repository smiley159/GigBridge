'use strict';

describe('Controller: WeddingCtrl', function () {

  // load the controller's module
  beforeEach(module('angelHackApp'));

  var WeddingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeddingCtrl = $controller('WeddingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
