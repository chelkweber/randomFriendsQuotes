var app = angular.module('quoteMod');

app.factory('quoteService', function($http) {
	var quote = {};
	
	return {
		getQuote: function() {
			return $http.get('/rachel', function(data) {
				quote = data;
				return quote;
			});
		}
	}
	
})