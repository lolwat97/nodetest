function start(response) {
	console.log("Handling start function.");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello World!");
	response.end();
}

function lel(response) {
	console.log("U W0T M8");
}

var handle = {}
handle["/"] = start;
handle["/start"] = start;
handle["/lel"] = lel;

exports.handle = handle
