var myApp = angular.module('myApp');

myApp.controller('firstPageController',['$scope','$routeParams','$interpolate','$location',function($scope,$routeParams,$interpolate,$location){
	$scope.textVar = 'this text is from controller';
	$scope.a = $routeParams.a;
	$scope.b = $routeParams.b;
	/*var newV = $interpolate('contact/{{a}}/{{b}}')($scope);
	$location.path(newV);*/
}]);


