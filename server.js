var express = require('express');
var app = express();
var data = require('./data');

app.get('/', function(request, response) {
	response.send('working')
});

//random quotes

app.get('/random/rachel', function(request, response) {
	response.send(data.characters.rachel.quotes[Math.floor(Math.random() * data.characters.rachel.quotes.length)]);
});

app.get('/random/ross', function(request, response) {
	response.send(data.characters.ross.quotes[Math.floor(Math.random() * data.characters.ross.quotes.length)]);
});

app.get('/random/monica', function(request, response) {
	response.send(data.characters.monica.quotes[Math.floor(Math.random() * data.characters.monica.quotes.length)]);
});

app.get('/random/chandler', function(request, response) {
	response.send(data.characters.chandler.quotes[Math.floor(Math.random() * data.characters.chandler.quotes.length)]);
});

app.get('/random/phoebe', function(request, response) {
	response.send(data.characters.pheobe.quotes[Math.floor(Math.random() * data.characters.phoebe.quotes.length)]);
});

app.get('/random/joey', function(request, response) {
	response.send(data.characters.joey.quotes[Math.floor(Math.random() * data.characters.joey.quotes.length)]);
});

//all quotes

app.get('/all/rachel', function(request, response) {
	response.send(data.characters.rachel.quotes);
})


//server set up

var server = app.listen(8080, function() {
	var port = server.address().port;
	console.log('working', port);
	console.log(data.characters);
});

