console.log('Module is working');

var app = angular.module('quoteMod', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/rachel', {
		templateUrl: 'views/rachel.html'
	})
	.when('/ross', {
		templateUrl: 'views/ross.html'
	})
	.when('/monica', {
		templateUrl: 'views/monica.html'
	})
	.when('/chandler', {
		templateUrl: 'views/chandler.html'
	})
	.when('/phoebe', {
		templateUrl: 'views/phoebe.html'
	})
	.when('/joey', {
		templateUrl: 'views/joey.html'
	})
	.otherwise({
		template: '<div id="selection"><p>Pick a Friend!</p></div>'
	})
});
