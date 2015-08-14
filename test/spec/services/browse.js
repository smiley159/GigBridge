'use strict';

describe('Service: browse', function () {

  // load the service's module
  beforeEach(module('angelHackApp'));

  // instantiate service
  var browse;
  beforeEach(inject(function (_browse_) {
    browse = _browse_;
  }));

  it('should do something', function () {
    expect(!!browse).toBe(true);
  });

});
