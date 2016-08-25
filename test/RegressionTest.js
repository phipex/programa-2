var expect = require("chai").expect;
var Item = require('../lib/clases/Item');
var UtilMath = require('../lib/clases/UtilMath');
var LinkedList = require('../lib/clases/LinkedList');
var Regression = require('../lib/clases/Regression');

describe('sumatory',function(){
	it('if no have list throw error', function () {
        var list = new LinkedList()
        expect(UtilMath.sum()).to.equal(0);
    });
    it('if list is emty return 0', function () {
        var list = new LinkedList()
        expect(UtilMath.sum(list)).to.equal(0);
    });
    it('if list is emty return 0', function () {
        var list = new LinkedList()
        list.push({uno:1})
        expect(UtilMath.sum(list)).to.equal({uno:1});
    });
	
});