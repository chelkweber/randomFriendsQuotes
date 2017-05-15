var app = angular.module('quoteMod');

app.controller('quoteCtrl', function($scope, quoteService) {
	console.log('controller has loaded');
	
	$scope.quote = {};
	
	quoteService.getQuote().then(function(quote) {
		$scope.quote = quote;
		console.log($scope.quote);
	});
	
});