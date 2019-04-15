var myApp = angular.module('myApp',['ngRoute']);

	myApp.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/first-page/:a/:b',{
			template:'<div>{{textVar}}<br/>value of route params is {{a}} and {{b}}</div>', //can also use redirectTo:'/newPage' insitead of templateURL or template 
											   //we can also write function in redirect to
											   // redirectTo:function(){alert("not found please try again") return '/newPage';}
			controller:'firstPageController'
		}).when('/',{
			template:'<div><h1>Home page</h1></div>'
		}).otherwise({template:'<div><h1>page not found</h1></div>'})

	}])


