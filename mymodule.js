var fs = require('fs'),
	path = require('path');
	
module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		var output;

		if (err) {
			return callback(err);

		} else {
			output = [];
			list.forEach(function(file) {
				if (path.extname(file) === "."+ext) output.push(file);
			});
		}

		callback(null, output);

	});
}
