var myApp = angular.module("myApp",[]);

myApp.controller('myController',["$scope",function($scope){

	$scope.a = 12;
	$scope.b = 34;
	$scope.obj={
		fname:'vishal',
		lname:'purohit',
		fullName:function(){
			return this.fname+this.lname
		},
		age:'27'
	}
}])

myApp.directive("message",function(){
	return{
		template:"<div><h3>it is from custom directive</h3>a is {{a}}<br/>b is {{b}}<br/>their sum is {{a+b}}<br/>value from the isolated scope parent {{x()}}</div>",
		scope:{
			x:'&'
		}
	}
})