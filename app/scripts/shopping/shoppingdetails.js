'use strict';



angular.module('myApp.shoppingdetailsCtrlModule',[])
  .controller('shoppingdetailsCtrl', function ($scope,$rootScope, $http,$location,  $routeParams) {

  	

  	// $scope.currentpatharr = ($location.path()).split('/');

  	// $scope.currentpathidindex = ($scope.currentpatharr).length - 1;

  	// $scope.currentpathid = ($scope.currentpatharr)[$scope.currentpathidindex];

  	$scope.currentselecteditemid = $routeParams.id;
  	$scope.itemdetails = {};
  	$scope.minnoofitems = 1;


  	// console.log('current path = '+ $scope.currentselecteditemid)

  	$http.get('../views/shopping/data'+$scope.currentselecteditemid+'.json').then(

  		//success
  		function success(response){
  			$scope.itemdetails = (response.data)[0];
  			//console.log($scope.itemdetails);
  		},

  		//error
  		function error(response){
  			
  		});

  	$scope.onItemCheckout = function(){
  		$scope.itemdetails.noofitems = $scope.minnoofitems;
  		//console.log($scope.itemdetails)

  		$rootScope.itemsincart.noofitemsincart += $scope.itemdetails.noofitems

  		$rootScope.itemsincart.itemsselected.push($scope.itemdetails);

  		console.log($rootScope.itemsincart.itemsselected);
      
  	}
    
  });