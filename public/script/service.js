var app = angular.module('quoteMod');

app.factory('quoteService', function($http) {
	var quote = {};
	
	return {
		getRachelQuote: function() {
			return $http.get('/rachel', function(data) {
				quote = data;
				return quote;
			});
		},
		
		getRossQuote: function() {
			return $http.get('/ross', function(data) {
				quote = data;
				return quote;
			});
		},
		
		getMonicaQuote: function() {
			return $http.get('/monica', function(data) {
				quote = data;
				return quote;
			});
		},
		
		getChandlerQuote: function() {
			return $http.get('/chandler', function(data) {
				quote = data;
				return quote;
			});
		},
		
		getPhoebeQuote: function() {
			return $http.get('/phoebe', function(data) {
				quote = data;
				return quote;
			});
		},
		
		getJoeyQuote: function() {
			return $http.get('/joey', function(data) {
				quote = data;
				return quote;
			});
		},
	}
	
})