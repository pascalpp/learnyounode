var http = require('http'),
	url = process.argv[2];

if (! url)
	return console.error('No URL provided.');

http.get(url, function(stream) {

	stream.setEncoding('utf8');
	stream.on('data', function(data) {
		console.log(data);	
	});

});
