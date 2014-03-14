var net = require('net')

var pad = function(n) {
	if (Number(n) < 10) {
		return "0" + String(n)
	} else {
		return String(n)
	}
}

var server = net.createServer(function (socket) {
	var dd = new Date()

	var ss = dd.getFullYear() + '-' + pad(dd.getMonth()+1) + '-' + pad(dd.getDate()) + ' ' + pad(dd.getHours()) + ':' + pad(dd.getMinutes()) + '\n'
	
	socket.end(ss)
	
})
server.listen(process.argv[2])


// YYYY-MM-DD hh:mm