url = require("url");

exports.user = function(request, response) {
	request.on("end", function() {

		// Retrieve query object
		var query = url.parse(request.url, true).query; 

		response.send('Hello ' + query['name'] + '!');

	});
	request.resume();
};