var myApp = angular.module("myApp",['ngSanitize']);

myApp.controller("myController",["$scope",function($scope){

	$scope.a=2;
	$scope.b = 3;

	$scope.o = {
		x:2,
		y:3,
		z:5
	}

	$scope.newarray = [{'name':'vishal','age':'27'},{'name':'ram','age':'29'}];
    

	$scope.$watch('a',function(newValue,oldValue){
		if(newValue!=oldValue){

			console.log("refrence watch");
			$scope.o.z=2*$scope.a;
			$scope.newarray.push({"name":"newName"+newValue+"","age":newValue*6});
		}
	})

	$scope.$watch('o',function(newValue,oldValue){
		if(newValue!=oldValue){

			// console.log("refrence watch with object");
			console.log($scope.o);
			$scope.b=$scope.o.z;
			$scope.te = "watch with true,<i>equality watch</i>";
		}
	},true)

	$scope.$watchGroup(['a','b'],function(newValue,oldValue){
		if(newValue!=oldValue){
			console.log("watchGroup is triggered");

		}
	})



	$scope.$watchCollection('newarray',function(newValue,oldValue){
		if(newValue!=oldValue){
			console.log('watch Collection triggered');
			console.log(newValue);

		}
	}) // if we write true here will watch for inner property changes of the array objects


}])