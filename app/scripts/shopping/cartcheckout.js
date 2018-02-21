'use strict';



angular.module('myApp.shoppingCartCheckoutCtrlModule',[])
  .controller('shoppingCartCheckoutCtrl', function ($scope,$rootScope, $http,$location,  $routeParams) {
  	//console.log($rootScope.itemsincart.itemsselected)

  	$scope.checkoutitems = $rootScope.itemsincart.itemsselected;

  	$scope.totalprice = 0;

  	for(var i=0; i< ($scope.checkoutitems).length; i++ ){
  		var arritem = ($scope.checkoutitems)[i];
  		var arritemtotal = (parseInt((arritem.price).replace("$", "")))*arritem.noofitems
  		$scope.totalprice += arritemtotal;
  	}
  	console.log($scope.totalprice);

  });
