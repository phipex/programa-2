"use strict";
class UtilMath {
    constructor() {
    }

    static mean(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, sum = 0, mean;
        for (i = 0; i < len; i++) {
            sum += parseFloat(list.getValue(i));
        }
        mean = parseFloat(sum / len);
        return parseFloat(mean);
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

}
module.exports = UtilMath;
