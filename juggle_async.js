var http = require('http')
var bl = require('bl')
var urls = process.argv.slice(2)

var output = []
var counter = 0

var doget = function(url, i, callback) {
	http.get(url, function(response) {
		response.pipe(bl(function(err, data) {
			if (err)
				return callback(err)

			data = data.toString()
			callback(null, data, i)
		}))
	})
}

var postget = function(err, data, i) {
	if (err)
		return console.error(err)
	
	output[i] = data
	counter++
	
	if (counter === urls.length) {
		output.forEach(function(line) {
			console.log(line)
		})
	}
}

urls.forEach(function(url, i) {
	doget(url, i, postget)
})
