var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, data) {
	if (err) {
		return console.log(err)
	}

	var countNewLineArr = data.toString().split('\n');
	console.log(countNewLineArr.length -1);
})

