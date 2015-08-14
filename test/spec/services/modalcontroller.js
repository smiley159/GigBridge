'use strict';

describe('Service: ModalController', function () {

  // load the service's module
  beforeEach(module('angelHackApp'));

  // instantiate service
  var ModalController;
  beforeEach(inject(function (_ModalController_) {
    ModalController = _ModalController_;
  }));

  it('should do something', function () {
    expect(!!ModalController).toBe(true);
  });

});
