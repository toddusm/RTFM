var rtfmApp = angular.module('rtfmApp');

rtfmApp.service('threadsService', function(fb){
	this.getThreads = function(){
		return new Firebase(fb.url + '/threads/');
	}
	
	this.getThread = function(threadID){
		return new Firebase(fb.url + '/threads/' + threadID);
	}
	
	this.getComments = function(threadID){
		return new Firebase(fb.url + '/threads/' + threadID + '/comments');
	}
});