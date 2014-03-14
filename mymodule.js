var fs = require('fs'),
	path = require('path');
	
module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, list) {
		var output;

		if (err)
			return callback(err);

		list = list.filter(function(file) {
			return path.extname(file) === "." + ext;
		});

		callback(null, list);

	});
}
