var myApp = angular.module("myApp",[]);

myApp.controller("myController",["$scope","calcFactory",function($scope,calcFactory){
				$scope.a = 2;
				$scope.b = 3;
				$scope.username = "Vishal";
				$scope.sumOfnc = function(){
					$scope.sumOf = calcFactory.doSum($scope.a,$scope.b);
				 }

				}])

myApp.factory("calcFactory",function(){
	var objectCalCFactory = {};
	objectCalCFactory.doSum = function(a,b){
		return parseInt(a)+parseInt(b);
	}
	return objectCalCFactory;
})