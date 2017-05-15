var app = angular.module('quoteMod');

app.controller('quoteCtrl', function($scope, quoteService) {
	console.log('controller has loaded');
	
	$scope.rachelQuote = {};
	
	quoteService.getRachelQuote().then(function(quote) {
		$scope.rachelQuote = quote;
		console.log($scope.rachelQuote);
	});
	
	$scope.rossQuote = {};
	
	quoteService.getRossQuote().then(function(quote) {
		$scope.rossQuote = quote;
		console.log($scope.rossQuote);
	});
	
	$scope.monicaQuote = {};
	
	quoteService.getMonicaQuote().then(function(quote) {
		$scope.monicaQuote = quote;
		console.log($scope.monicaQuote);
	});
	
	$scope.chandlerQuote = {};
	
	quoteService.getChandlerQuote().then(function(quote) {
		$scope.chandlerQuote = quote;
		console.log($scope.chandlerQuote);
	});
	
	$scope.phoebeQuote = {};
	
	quoteService.getPhoebeQuote().then(function(quote) {
		$scope.phoebeQuote = quote;
		console.log($scope.phoebeQuote);
	});
	
	$scope.joeyQuote = {};
	
	quoteService.getJoeyQuote().then(function(quote) {
		$scope.joeyQuote = quote;
		console.log($scope.joeyQuote);
	});
	
});