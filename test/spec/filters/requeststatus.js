'use strict';

describe('Filter: requestStatus', function () {

  // load the filter's module
  beforeEach(module('angelHackApp'));

  // initialize a new instance of the filter before each test
  var requestStatus;
  beforeEach(inject(function ($filter) {
    requestStatus = $filter('requestStatus');
  }));

  it('should return the input prefixed with "requestStatus filter:"', function () {
    var text = 'angularjs';
    expect(requestStatus(text)).toBe('requestStatus filter: ' + text);
  });

});
