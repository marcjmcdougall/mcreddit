var app = angular.module('McReddit', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider

		.state('home', {

			url : '/home',
			templateUrl : '/templates/home.html',
			controller: 'MainCtrl'
		})

		.state('posts', {

			url : '/posts/{id}',
			templateUrl : '/templates/posts.html',
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