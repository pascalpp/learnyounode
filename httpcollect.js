var http = require('http');

http.get(process.argv[2], function(stream) {

	stream.setEncoding('utf8');
	var data = [];
	stream.on('data', function(d) {
		data.push(d);
	});
	stream.on('error', console.error);
	stream.on('end', function() {
		data = data.join('');
		console.log(data.length);
		console.log(data);
	});

});
