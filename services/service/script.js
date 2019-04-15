var myApp = angular.module("myApp",[]);

myApp.controller("myController",["$scope","calcService",function($scope,calcService){
	$scope.x = 3;
	$scope.y = 5;
	$scope.sumFnc = function(){
		calcService.doSum($scope.x,$scope.y,function(sum){$scope.sumOf=sum;});
	}
}])


myApp.service("calcService",function(){

	this.doSum = function(x,y,sumxy){
		var ss = parseInt(x) + parseInt(y);
		sumxy(ss);
	}
	
})


