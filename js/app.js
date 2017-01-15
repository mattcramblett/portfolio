var app = angular.module('Portfolio', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "views/home.html"
		})
		.when('/projects', {
			controller: "ProjectsController",
			templateUrl: "views/projects.html"
		})
		.when('/about', {
			templateUrl: "views/about.html"
		})
		.when('/contact', {
			templateUrl: "views/contact.html"
		})
		.otherwise({
			redirectTo: '/'
		});
});