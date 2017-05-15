var express = require('express');
var app = express();
var data = require('./data');

//connect to public folder
app.use(express.static(__dirname + '/public'))

//get request to folder

app.get('/', function(request, response) {
	response.send('working')
});

//random quotes

app.get('/rachel', function(request, response) {
	response.send(data.characters.rachel.quotes[Math.floor(Math.random() * data.characters.rachel.quotes.length)]);
});

app.get('/ross', function(request, response) {
	response.send(data.characters.ross.quotes[Math.floor(Math.random() * data.characters.ross.quotes.length)]);
});

app.get('/monica', function(request, response) {
	response.send(data.characters.monica.quotes[Math.floor(Math.random() * data.characters.monica.quotes.length)]);
});

app.get('/chandler', function(request, response) {
	response.send(data.characters.chandler.quotes[Math.floor(Math.random() * data.characters.chandler.quotes.length)]);
});

app.get('/phoebe', function(request, response) {
	response.send(data.characters.phoebe.quotes[Math.floor(Math.random() * data.characters.phoebe.quotes.length)]);
});

app.get('/joey', function(request, response) {
	response.send(data.characters.joey.quotes[Math.floor(Math.random() * data.characters.joey.quotes.length)]);
});

//all quotes

app.get('/all', function(request, response) {
	response.send(data.characters);
})


//server set up

var server = app.listen(8080, function() {
	var port = server.address().port;
	console.log('working', port);
});

