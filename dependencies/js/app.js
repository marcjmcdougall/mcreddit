var app = angular.module('McReddit', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider

		.state('home', {

			url : '/home',
			templateUrl : '/dependencies/templates/home.html',
			controller: 'MainCtrl'
		})

		.state('posts', {

			url : '/posts/{id}',
			templateUrl : '/dependencies/templates/posts.html',
			controller: 'PostsCtrl'
		});

	$urlRouterProvider.otherwise('home');

}]);

app.factory('posts', [function(){

	var object = {

		posts: []
	};

	return object;
}]);