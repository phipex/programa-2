//'use strict';

//module.exports = {};

var File = require('./clases/File.js');
var Regression = require('./clases/Regression')
var UtilMath = require('./clases/UtilMath')

var file2Read = './document';
console.log('Leyendo archivo ' + file2Read);
var file = new File(file2Read);
file.read();
var list = file.toList();
var mean = UtilMath.mean(list);
var deviation = UtilMath.stdDeviation(list);
console.log('mean',mean)
console.log('deviation',deviation)

file2Read = './Test4';
console.log('Leyendo archivo ' + file2Read);
file = new File(file2Read);
file.read();
list = file.toListPar();
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
