var expect = require("chai").expect;
var Item = require('../lib/clases/Item');
var UtilMath = require('../lib/clases/UtilMath');
var LinkedList = require('../lib/clases/LinkedList');
var Regression = require('../lib/clases/Regression');
describe('UtilMath', function () {
    describe('mean()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.mean(list)).to.equal(0);
        });
        /*it('has to throw an exeption with no list', function () {
            var list = null
            expect(UtilMath.mean()).to.throw('Error empty list');
        });*/
        it('has to be 1 with the following elements [1,1]', function () {
            var list = new LinkedList(1)
            list.push(1);
            expect(UtilMath.mean(list)).to.equal(1);
        });
        it('has to be 3 with the following elements [3,3,3,3]', function () {
            var list = new LinkedList(3)
            list.push(3);
            list.push(3);
            list.push(3);
            expect(UtilMath.mean(list)).to.equal(3);
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

    describe('sum()',function(){
        it('if no have list throw error', function () {
            var list = new LinkedList()
            expect(UtilMath.sum()).to.equal(0);
        });
        it('if list is emty return 0', function () {
            var list = new LinkedList()
            expect(UtilMath.sum(list)).to.equal(0);
        });
        it('if only object, sum is equeal', function () {
            var list = new LinkedList()
            list.push({uno:1})
            expect(UtilMath.sum(list)).to.equal({uno:1});
        });
        it('if only object whit 2 keys, sum is equeal at value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:1,dos:1});
        });
         it('if only object whit 2 keys, sum is equeal at plus value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2});
        });
         it('if only object whit 2 keys, sum is equeal at plus value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            list.push({uno:1, dos:1,tres:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2,tres:1});
        });
    });
    
    describe('sumSquared()',function(){
        it('if no have list throw error', function () {
            var list = new LinkedList()
            expect(UtilMath.sum()).to.equal(0);
        });
        it('if list is emty return 0', function () {
            var list = new LinkedList()
            expect(UtilMath.sum(list)).to.equal(0);
        });
        it('if only object, sum is equeal at pow', function () {
            var list = new LinkedList()
            list.push({uno:1})
            expect(UtilMath.sum(list)).to.equal({uno:1});
        });
        it('if only object whit 2 keys, sum is equeal at pow value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:1,dos:1});
        });
         it('if only object whit 2 keys, sum is equeal at pow value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2});
        });
         it('if only object whit 2 keys, sum is equeal at pow value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            list.push({uno:1, dos:1,tres:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2,tres:1});
        });
        it('if only object whit 2 keys, sum is equeal at pow value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            list.push({uno:1, dos:1,tres:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2,tres:1});
        });
        it('if only object whit 2 keys, sum is equeal at pow value of keys', function () {
            var list = new LinkedList()
            list.push({uno:2, dos:1})
            list.push({uno:1, dos:1,tres:1})
            expect(UtilMath.sum(list)).to.equal({uno:5,dos:2,tres:1});
        });
        it('if only object whit 2 keys, sum is equeal at pow value of keys', function () {
            var list = new LinkedList()
            list.push({uno:2, dos:1})
            list.push({uno:1, dos:2,tres:1})
            expect(UtilMath.sum(list)).to.equal({uno:5,dos:5,tres:1});
        });
    });

    describe('sumProduct()',function(){
        it('if no have list throw error', function () {
            var list = new LinkedList()
            expect(UtilMath.sum()).to.equal(0);
        });
        it('if list is emty return 0', function () {
            var list = new LinkedList()
            expect(UtilMath.sum(list)).to.equal(0);
        });
        it('if only object, sum is equeal', function () {
            var list = new LinkedList()
            list.push({uno:1})
            expect(UtilMath.sum(list)).to.equal({uno:1});
        });
        it('if only object whit 2 keys, sum is equeal at value of keys', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:1,dos:1});
        });
         it('', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2});
        });
        it('', function () {
            var list = new LinkedList()
            list.push({uno:1, dos:1})
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2});
        });
        it('', function () {
            var list = new LinkedList()
            list.push({uno:2, dos:1})
            list.push({uno:1, dos:1})
            expect(UtilMath.sum(list)).to.equal({uno:2,dos:2});
        });
    });
});
