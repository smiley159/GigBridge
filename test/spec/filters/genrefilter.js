'use strict';

describe('Filter: genreFilter', function () {

  // load the filter's module
  beforeEach(module('angelHackApp'));

  // initialize a new instance of the filter before each test
  var genreFilter;
  beforeEach(inject(function ($filter) {
    genreFilter = $filter('genreFilter');
  }));

  it('should return the input prefixed with "genreFilter filter:"', function () {
    var text = 'angularjs';
    expect(genreFilter(text)).toBe('genreFilter filter: ' + text);
  });

});
