//'use strict';

//module.exports = {};

var File = require('./clases/File.js');
var Regression = require('./clases/Regression')
var UtilMath = require('./clases/UtilMath')
var file = new File('./document');
file.read();
var list = file.toList();
var mean = UtilMath.mean(list);
var deviation = UtilMath.stdDeviation(list);
console.log('mean',mean)
console.log('deviation',deviation)


file = new File('./Test4');
file.read();
list = file.toList();
var prediction = Regression.prediction(list);
console.log('prediction',prediction)
var betaOne = Regression.betaOne(list);
console.log('betaOne',betaOne[0])
var betaZero = Regression.betaZero(list);
console.log('betaZero',betaZero)
var correlation = Regression.correlation(list);
console.log('correlation',correlation)
var rSquared = Regression.rSquared(list);
console.log('rSquared',rSquared)
