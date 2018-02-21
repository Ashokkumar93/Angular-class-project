'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */
angular.module('myApp.mainCtrlModule',[])
  .controller('mainCtrl', function ($rootScope) {
    $rootScope.itemsincart = {
    	noofitemsincart : 0,
    	itemsselected :[]
    };
  });
