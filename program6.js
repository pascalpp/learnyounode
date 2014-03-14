var mymodule = require('./mymodule.js')
	
mymodule('files', 'txt', function(err, data) {
	console.log(err, data);
});
