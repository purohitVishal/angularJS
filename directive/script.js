var myApp = angular.module("myApp",[]);

myApp.controller("myController",["$scope",function($scope){

					console.log("inside myApp controller");
				}])

myApp.directive("message",function($interpolate){
	return{
		compile: function(tElement,tAttribute){
			console.log(tAttribute.text + " In compile--	");
			return{
				pre:function(scope, iElement, iAttribute, controller){
					console.log(iAttribute.text + "in pre---");
					console.log(iAttribute.valuzz + "in valuzz pre---");

				},
				post:function(scope, iElement, iAttribute, controller){
					console.log(iAttribute.text + "in post ===")
					if(iAttribute.text==3){
						iElement.css("border","solid red 1px");
					}
				}
			}
		},
		controller:function($scope,$element, $attrs){
			var v = $interpolate($attrs.text)($scope);
			console.log(v + " In controller-- ")
		}


	}
})