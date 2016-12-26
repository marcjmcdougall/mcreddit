app.controller('MainCtrl', ['$scope', function($scope) {

	$scope.posts = [

		{
			'votes' : 15,
			'title' : 'This is a really sexy title that we will use in our Reddit app.  It happens to be quite long which is important for styling purposes.',
			'subreddit': 'getmotivated',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-1.jpg',
			'uri' : '',
			'date' : 'August 9th, 2017',
			'author' : 'Dicktits McGee',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 40
		},
		{
			'votes' : 12,
			'title' : 'This is the meaning of life in one Reddit post.  Really.',
			'subreddit': 'startups',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-2.jpg',
			'uri' : 'http://www.google.com',
			'date' : 'August 9th, 2017',
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 220
		},
		{
			'votes' : 13,
			'title' : 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
			'subreddit': 'wordpress',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-3.jpg',
			'uri' : '',
			'date' : 'August 9th, 2017',
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 6
		},
		{
			'votes' : 8,
			'title' : 'Nulla porttitor accumsan tincidunt.',
			'subreddit': 'growmybusiness',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-4.jpg',
			'uri' : '',
			'date' : 'August 9th, 2017',
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 27
		},
		{
			'votes' : 5,
			'title' : 'Nulla quis lorem ut libero malesuada feugiat.',
			'subreddit': 'smallbusiness',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-5.jpg',
			'uri' : 'http://www.google.com',
			'date' : 'August 9th, 2017',
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 27
		},
		{
			'votes' : 13,
			'title' : 'Vivamus suscipit tortor eget felis porttitor volutpat.',
			'subreddit': 'freelance',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-6.jpg',
			'uri' : '',
			'date' : 'August 9th, 2017',
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 27
		},
		{
			'votes' : 18,
			'title' : 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
			'subreddit': 'entrepreneur',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-7.jpg',
			'uri' : '',
			'date' : 'August 9th, 2017',
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 27
		},
		{
			'votes' : 20,
			'title' : 'Donec sollicitudin molestie malesuada.',
			'subreddit': 'freelance',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-8.jpg',
			'uri' : 'http://www.google.com',
			'date' : 'August 9th, 2017',
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 27
		}

	];

	$scope.addPost = function(){

		if(!$scope.title || $scope.title === ''){ 

			return;
		}

		var newPost = {
			
			'votes' : 0,
			'title' : $scope.title,
			'subreddit': 'my_subreddit',
			'thumbUri': '../my-reddit/assets/img/thumbs/thumb-6.jpg',
			'uri' : $scope.link,
			'author' : 'Squagem',
			'authorUri' : 'https://www.kilobytestudios.org',
			'comments' : 27
		}

		$scope.title = '';
		$scope.link = '';

		$scope.posts.push(newPost);
	};

	$scope.incrementVotes = function(post){

		post.votes++;
	};

	$scope.loggedIn = false;

}]);