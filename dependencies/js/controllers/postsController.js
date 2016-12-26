app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
	
	$scope.post = posts.posts[$stateParams.id];

	$scope.addComment = function(){

		if($scope.body === '' || !$scope.body){

			return;
		}

		$scope.post.comments.push({'author': 'Joe', 'body' : $scope.body, votes: 0});

		$scope.body = '';
	}

	$scope.loggedIn = true;

}]);