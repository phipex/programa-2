"use strict";
class Regression {
    constructor() {
    }
    
    static sum(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, payload, sumOne = 0, itemOne, itemTwo, sumTwo = 0, meanOne = 0, meanTwo = 0, squareOne = 0, squareTwo = 0, product = 0; 
        for (i = 0; i < len; i++) {
            payload = list.get(i);
            itemOne = payload.itemOne;
            itemTwo = payload.itemTwo;
            
            sumOne += itemOne;
            sumTwo += itemTwo;
            squareOne += Math.pow(itemOne, 2);
            squareTwo += Math.pow(itemTwo, 2);
            product += (itemOne * itemTwo);
        }
        meanOne = parseFloat(sumOne / len);
        meanTwo = parseFloat(sumTwo / len);
        return [sumOne, sumTwo, meanOne, meanTwo, squareOne, squareTwo, product];
    }
    
    static betaOne(list) {
        var sum = Regression.sum(list);
        var sumOne = sum[0], sumTwo = sum[1], meanOne = sum[2], meanTwo = sum[3], squareOne = sum[4], squareTwo = sum[5], product = sum[6]; 
        var len = list.length;
        var betaOne = ((product - (len * ( meanOne * meanTwo)))/((squareOne - (len * Math.pow(meanOne, 2)))));
        return [betaOne, meanOne, meanTwo];
    }
    
    static betaZero(list) {
        var beta = Regression.betaOne(list);
        var betaOne = beta[0], meanOne = beta[1], meanTwo = beta[2];
        var betaZero = (meanTwo - (betaOne * meanOne));
        return betaZero;
    }
    
    static correlation(list) {
        var sum = Regression.sum(list);
        var sumOne = sum[0], sumTwo = sum[1], meanOne = sum[2], meanTwo = sum[3], squareOne = sum[4], squareTwo = sum[5], product = sum[6]; 
        var len = list.length;
        var correlationNum = ((len * product) - (sumOne * sumTwo));
        var correlationDen = Math.sqrt((len * (squareOne) - (Math.pow(sumOne, 2))) * (len * (squareTwo) - (Math.pow(sumTwo, 2))));
        var correlation = correlationNum/correlationDen;
        return correlation;
    }
    
    static rSquared(list) {
        var r = Regression.correlation(list);
        return Math.pow(r, 2);
    }
    
    static prediction(list) {
        var beta = Regression.betaOne(list);
        var betaOne = beta[0];
        var betaZero = Regression.betaZero(list);
        return (betaZero + (betaOne * 386));
    }

}
module.exports = Regression;