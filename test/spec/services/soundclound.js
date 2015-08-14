'use strict';

describe('Service: SoundClound', function () {

  // load the service's module
  beforeEach(module('angelHackApp'));

  // instantiate service
  var SoundClound;
  beforeEach(inject(function (_SoundClound_) {
    SoundClound = _SoundClound_;
  }));

  it('should do something', function () {
    expect(!!SoundClound).toBe(true);
  });

});
