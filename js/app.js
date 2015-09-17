var rtfmApp = angular.module('rtfmApp', ['ngRoute', 'firebase'])

rtfmApp.constant('fb', {
	url: 'https://radiant-heat-2313.firebaseio.com/'
})
rtfmApp.config(function($routeProvider){
	$routeProvider
		.when('/threads', {
			templateUrl: 'js/threads/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function(threadsService){
					return threadsService.getThreads()
				}
				// thread: function(threadService, $firebaseArray){
				// 	return $firebaseArray(threadService.getThread());
				}
			})
		.when('/threads/:threadId', {
			templateUrl:'js/thread/thread.html',
			controller: 'threadCtrl',
			resolve: {
				threadRef: function(threadsService, $route){
					return threadsService.getThread($route.current.params.threadId);
				},
				
				commentsRef: function(threadsService, $route){
					return threadsService.getComments($route.current.params.threadId);
				}
					
				}
			// 	theadsRef: threadsService.getThreads()
			// 	thread: function(threadService, $firebaseObject, $route){
			// 		return $firebaseObject(threadService.getThread($route.current.params.threadID));
		})
		.otherwise( 
			 '/threads'
		)
});