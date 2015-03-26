function route(path, handler, response) {
	console.log("About to route a request for "+path+".");
	if (typeof(handler[path]) === 'function') {
		handler[path](response);
	} else {
		console.log("No handler found for "+path+".");
	}
}

exports.route = route;
