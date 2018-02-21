'use strict';


angular.module('myApp.aboutCtrlModule',[])
  .controller('aboutCtrl',[ '$scope',function ($scope) {
    $scope.name="Radhika";
  }])
  .directive('helloMessage', function(){
			return{
				templateUrl: '../../views/about/directive-template.html',
				restrict:'C',
				transclude: true,
				//isolated scope
				scope:{},
				controller: function($scope){
					$scope.name = 'isolated scope Radhika'
				}
			}
		});