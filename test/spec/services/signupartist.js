'use strict';

describe('Service: signUpArtist', function () {

  // load the service's module
  beforeEach(module('angelHackApp'));

  // instantiate service
  var signUpArtist;
  beforeEach(inject(function (_signUpArtist_) {
    signUpArtist = _signUpArtist_;
  }));

  it('should do something', function () {
    expect(!!signUpArtist).toBe(true);
  });

});
