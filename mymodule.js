var fs = require('fs'),
	path = require('path');
	
module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		var output;

		if (err) {
			console.error(err);
		} else {
			output = [];
			list.forEach(function(file) {
				if (path.extname(file) === "."+ext) list.push(file);
			});
		}

		callback(err, output);

	});
}
