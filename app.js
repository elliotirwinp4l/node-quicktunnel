var localtunnel = require('localtunnel'),
    fs = require('fs'),
    port = process.argv[2] || 80,
    url = process.argv[3] || 'p4l'+Date.now();
console.log(port,url);
var tunnel = localtunnel(port, {subdomain:url}, function(err, tunnel){
	if (err) {
		console.log('Error:', err);
	}

	fs.writeFile('url.details','Your url is: '+tunnel.url, function(err2) {
		if (err2) {
			return console.log(err2);
		}
	});
});

tunnel.on('clost', function() {
	console.log('Tunnel closed');
});
