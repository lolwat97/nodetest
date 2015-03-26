var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Got a request for "+pathname+".");
		route(pathname, handle, response);
	}
	http.createServer(onRequest).listen(80);
	console.log("Server started.");
}

exports.start = start;
