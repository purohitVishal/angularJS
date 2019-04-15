var myApp = angular.module('myApp',[]);

myApp.controller("myController",["$scope","calcService",function($scope,calcService){
	$scope.sumOf = calcService.getSum(2,3);
	// calcService.getSumFnc(a,b,function(sumab){$scope.sumOf = sumab;});
}])

myApp.provider("calcService",function(){

	/*var baseURl = " ";

	this.config = function(url){
		baseURl = url;
	}*/

	this.$get = function(){              //this is executed by angular automatically before any thing at the time of configuration
		var oCalcService = {};
		oCalcService.getSum = function(a,b){
			return parseInt(a) + parseInt(b);
		}

		return oCalcService;
	};

	// this.$get = ["$http",function($http){

	// 	var oCalcService = {};
	// 	oCalcService.getSum = function(a,b,sumfnc){
		
	// 		$http({
	// 		url: baseUrl+'Sum?a='+a+'&b='+b,
	// 		method:'GET'
	// 	}).then(function(resp){
	// 		sumfnc(resp.data);
	// 	},then(function(resp){
	// 		console.log("error occured");
	// 	}))

	// 	}

	// 	return oCalcService;
	// }];

})

myApp.config(["calcServiceProvider",function(calcServiceProvider){
		// calcServiceProvider.config("https://localhost/3031/");
	}]
)