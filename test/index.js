'use strict';

var assert = require('assert');
// var lib = require('../lib');
var File = require('../lib/clases/File');
var expect = require("chai").expect;
console.log('estoy en la consola');

describe('estoy en describe', function () {
  it('should have unit test!', function () {
    assert(false, 'we expected this package author to add actual unit tests.');
    assert(false, 'he fallado como ser humano');
    assert(true, 'he fallado como ser humano');
  });
  describe('estoy dentro describe', function () {
	  it('should have unit test!', function () {
		assert(false, 'we expected this package author to add actual unit tests.');
		assert(false, 'he fallado como ser humano');
		assert(true, 'he fallado como ser humano');
	  });
	  
	  
	});
  
});
