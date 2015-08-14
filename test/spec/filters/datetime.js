'use strict';

describe('Filter: dateTime', function () {

  // load the filter's module
  beforeEach(module('angelHackApp'));

  // initialize a new instance of the filter before each test
  var dateTime;
  beforeEach(inject(function ($filter) {
    dateTime = $filter('dateTime');
  }));

  it('should return the input prefixed with "dateTime filter:"', function () {
    var text = 'angularjs';
    expect(dateTime(text)).toBe('dateTime filter: ' + text);
  });

});
