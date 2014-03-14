var mymodule = require('./mymodule.js'),
	dir = process.argv[2],
	ext = process.argv[3];
	
mymodule(dir, ext, function(err, data) {
	if (err)
		return console.log(err);

	data.forEach(function(file) {
		console.log(file);
	});
});
