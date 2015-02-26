var angApp = angular.module('angApp', []);

angApp.factory('customerFactory', function(){
	var customers = [
		{ name: 'Tiger Woods', createdAt: "April 3rd 2014" },
		{ name: 'Bob Barker', createdAt: "April 3rd 2014" },
		{ name: 'Bill Simmons', createdAt: "April 3rd 2014" }
	];

	var factory = {};

	factory.getCustomers = function (callback){
		console.log('inside factory');
		callback(customers);
	}

	return factory;
})

angApp.controller('customersController', function($scope, customerFactory) {
	$scope.customers = [];

	customerFactory.getCustomers(function (data){
		$scope.customers = data;
	})

	$scope.addCustomer = function(){
		var error = 0;
		for (customer in $scope.customers) {
			if ($scope.customers[customer].name == $scope.newCustomer.name)
			{
				error++;
			}
		}
		if (error == 0)
		{
			$scope.newCustomer.createdAt = new Date();
			$scope.customers.push($scope.newCustomer);
		}
		else
		{
			alert('Customer Name already exists!');
		}
		$scope.newCustomer = {};
	}

	$scope.removeCustomer = function(customer){
		$scope.customers.splice($scope.customers.indexOf(customer), 1);
		// console.log(customer);
	}

})