var File = require('./clases/File.js');
var UtilMath = require('./clases/UtilMath')
var file = new File('./document');
file.read();
var list = file.toList();
var mean = UtilMath.mean(list);
var deviation = UtilMath.stdDeviation(list);
console.log('mean',mean)
console.log('deviation',deviation)

