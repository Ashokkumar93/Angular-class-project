'use strict';


angular.module('myApp.githubCtrlModule',[])
.controller('githubCtrl',['$scope','$rootScope','$http', function ($scope, $rootScope, $http) {
   
    $scope.githubusers='';
    $scope.allusersgetdata = false;
    $scope.searchusersgetdata = false;
    $scope.githubusersearch ={
    	name:''
    };

	($scope.onGitHubUserData = function(){
		
	    $http.get('https://api.github.com/users').then(
	    	//success function
	    	function(response){
	    		$scope.allusersgetdata = true;
	    		console.log(response.data);
	    		$scope.githubusers = response.data;
	    		console.log('github user api requset successfull...');
	    	},
	    	//error function
	    	function(response){
	    		console.log('github user api requset failure...');
	    	});
	})();

    $scope.onGitHubUserSearch = function(){
    	$scope.allusersgetdata = false;
    	//console.log($scope.githubusersearch.name);
    	$scope.searchedgithubusers = [];
    	$http.get('https://api.github.com/users/'+$scope.githubusersearch.name).then(
    	//success function
    	function(response){
    		console.log(response.data);
    		($scope.searchedgithubusers).push(response.data);
    		$scope.searchusersgetdata = true;
    		console.log('github user api requset successfull...');
    	},
    	//error function
    	function(response){
    		console.log('github user api requset failure...');
    	});
    }

  }]);




