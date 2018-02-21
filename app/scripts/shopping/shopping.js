'use strict';


angular.module('myApp.shoppingCtrlModule',[])
  .controller('shoppingCtrl', function ($scope, $http) {

  	$scope.shoppingdetails = '';

  	$http.get('../views/shopping/data.json').then(

  		//success
  		function success(response){
  			$scope.shoppingdetails = (response.data)[0];
  			console.log($scope.shoppingdetails);
  			$scope.menadultdetails = ($scope.shoppingdetails).men.adult;
  			$scope.menkidsdetails = ($scope.shoppingdetails).men.kids;
  			$scope.womenadultdetails = ($scope.shoppingdetails).women.adult;
  			$scope.womenkidsdetails = ($scope.shoppingdetails).women.kids;
  		},

  		//error
  		function error(response){
  			
  		});
    
  });