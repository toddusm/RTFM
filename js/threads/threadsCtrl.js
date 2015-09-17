var rtfmApp = angular.module('rtfmApp');

rtfmApp.controller('threadsCtrl', function($scope, $firebaseArray, threadsRef){
	$scope.threads = $firebaseArray(threadsRef);
	
	$scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });
	
	$scope.createThread = function(username, thread){
		$scope.threads.$add({
			username: username,
        	title: thread
		});
	}
})