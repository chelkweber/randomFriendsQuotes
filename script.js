var http = require('http');
var quotes = require('./quotes');

http.createServer(startServer).listen(8080);

function startServer(request, response) {
	var randomRachel = quotes.rachel[Math.floor(Math.random() * quotes.rachel.length)];
	var randomRoss = quotes.ross[Math.floor(Math.random() * quotes.ross.length)];
	var randomMonica = quotes.monica[Math.floor(Math.random() * quotes.monica.length)];
	var randomChandler = quotes.chandler[Math.floor(Math.random() * quotes.chandler.length)];
	var randomPhoebe = quotes.phoebe[Math.floor(Math.random() * quotes.phoebe.length)];
	var randomJoey = quotes.joey[Math.floor(Math.random() * quotes.joey.length)];
	response.writeHead(200, {'content-type': 'text/plain'});
	response.write(randomRachel + " - Rachel Green ");
	response.write(randomRoss + " - Ross Geller ");
	response.write(randomMonica + " - Monica Geller ");
	response.write(randomChandler + " - Chandler Bing ");
	response.write(randomPhoebe + " - Phoebe Buffay ");
	response.write(randomJoey + " - Joey Tribianni ");
	response.end();
}

