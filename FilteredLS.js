var fs = require('fs');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
	list.forEach(function(x) {
		if(ext === undefined) {
			console.log(x);
		}

		if(x.includes(ext)) {
			console.log(x);
		}
	})
})


