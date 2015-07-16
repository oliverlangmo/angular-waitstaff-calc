var myApp = angular.module('demo', []);

myApp.controller('waitCtrl', ['$scope', function($scope){


	$scope.resetDetails = function(){
		$scope.mealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercent = '';
	};

	$scope.initCharges = function(){
		$scope.subtotal = 0;
		$scope.tip = 0;
		$scope.total = 0;
	};

	$scope.initEarnings = function(){
		$scope.tipTotal = 0;
		$scope.mealCount = 0;
	};

	$scope.init = function(){
		$scope.formError = "";
		$scope.resetDetails();
		$scope.initCharges();
		$scope.initEarnings();
	};

	$scope.init();

	$scope.submitDetails = function(){

		if($scope.userSubmit.$invalid){
			$scope.formError = "Please enter valid values ";
		}
		else{
			$scope.formError = "";
	    // customerCharges
			$scope.subtotal = $scope.basePrice * (1 + $scope.taxRate/100);
			$scope.tip = $scope.basePrice * ($scope.tipPercent/100);
			$scope.total = $scope.subtotal + $scope.tip;
		// myEarnings
			$scope.tipTotal += $scope.tip;
			$scope.mealCount++;
			if($scope.mealCount != 0){
			  $scope.avgTip = $scope.tipTotal/$scope.mealCount;
		   }
		   else{
			$scope.avgTip = 0;
		   }
		}
	}; /// submitDetails


}]); /// waitCtrl


