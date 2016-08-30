"use strict";
class UtilMath {
    constructor() {
    }

    static mean(list) {
        UtilMath.sumatory(list);
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        mean = parseFloat(sum / len);
        return parseFloat(mean);
    }

    static sumatory(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, sum = 0;
        for (i = 0; i < len; i++) {
            sum += parseFloat(list.getValue(i));
        }
        
        return sum;
    }

    static stdDeviation(list) {
        var mean = UtilMath.mean(list)
        var len = list.length;
        var i, deviation = 0;
        for (i = 0; i < len; i++) {
            deviation += Math.pow((parseFloat(list.getValue(i)) - mean), 2);
        }
        deviation = parseFloat(deviation / (len - 1))
        deviation = parseFloat(Math.sqrt(deviation));
        return deviation;
    }

    static sumatoryPow(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var sumPow = 0;
        for (var i = list.length - 1; i >= 0; i--) {
            var value = list.getValue(i),
                powValue = Math.pow(value,2);
            sumPow += powValue;

        }
        

        return sumPow;
    }

    static sumatoryProduct(list1, list2){
        if ((!list1) && (!list1) ) {
            throw 'Error empty list';
        }
        var len1 = list1.length,
            len2 = list2.length;
        if (len1 === 0  && len2 === 0) {
            return 0;
        }
        if (len1 !== len2){
            throw 'Error length not equal';
        }
        var sumProd = 0;
        for (var i = list1.length - 1; i >= 0; i--) {
            var value1 = list1.getValue(i),
                value2 = list2.getValue(i),
                product = value1 * value2;
            sumProd += product;    
        }

        return sumProd;

    }

    static sumatoryLn(list){
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var sumLn = 0;
        for (var i = list.length - 1; i >= 0; i--) {
            var value = list.getValue(i),
                lnValue = Math.log(value);
            sumLn += lnValue;

        }
        

        return sumLn;
    }

    static sumatoryFunction(list,func){
        if (!list) {
            throw 'Error empty list'
        }
        if (typeof func === "function") {
            throw 'Error param is not function';
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var sumFunc = 0;
        for (var i = list.length - 1; i >= 0; i--) {
            var value = list.getValue(i),
                funValue = Math.log(value);
            if(!isNaN(parseFloat(funValue)) && isFinite(funValue)){
                sumFunc += funValue;
            }else{
               throw 'Error param function no return a number valid'; 
            }
            

        }
        

        return sumFunc;

    }
}
module.exports = UtilMath;
