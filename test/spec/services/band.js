'use strict';

describe('Service: Band', function () {

  // load the service's module
  beforeEach(module('angelHackApp'));

  // instantiate service
  var Band;
  beforeEach(inject(function (_Band_) {
    Band = _Band_;
  }));

  it('should do something', function () {
    expect(!!Band).toBe(true);
  });

});
