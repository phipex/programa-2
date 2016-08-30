var expect = require("chai").expect;
var Item = require('../lib/clases/Item');
var UtilMath = require('../lib/clases/UtilMath');
var LinkedList = require('../lib/clases/LinkedList');
var UtilLinkedList = require('../lib/clases/UtilLinkedList');
describe('UtilLinkedList', function () {
    describe('getNon()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilLinkedList.getNon(list).length).to.equal(0);
        });
        /*it('has to throw an exeption with no list', function () {
            var list = null
            expect(UtilMath.mean()).to.throw('Error empty list');
        });*/
        it('has to be 1 with the following elements [1]', function () {
            var list = new LinkedList(1)
            //list.push(1);
            expect(UtilLinkedList.getNon(list)).to.equal(1);
        });
        it('has to be 1 with the following elements [1,1]', function () {
            var list = new LinkedList(1)
            list.push(1);
            expect(UtilLinkedList.getNon(list)).to.equal(1);
        });
        

    });
    describe('stdDeviation()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.stdDeviation(list)).to.equal(0);
        });
        /*it('has to throw an exeption with no list', function () {
            var list = null
            expect(UtilMath.stdDeviation()).to.throw('Error empty list');
        });*/
        it('has to be 1 with the following elements [1,1]', function () {
            var list = new LinkedList(1)
            list.push(1);
            expect(UtilMath.stdDeviation(list)).to.equal(0);
        });
        it('has to be 3 with the following elements [3,3,3,3]', function () {
            var list = new LinkedList(3)
            list.push(3);
            list.push(3);
            list.push(3);
            expect(UtilMath.stdDeviation(list)).to.equal(0);
        });

    });

});
