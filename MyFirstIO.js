var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var countNewLineArr = buf.toString().split('\n');

console.log(countNewLineArr.length -1);