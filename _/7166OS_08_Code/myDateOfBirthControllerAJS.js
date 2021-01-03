var myApp = angular.module("myApp", []);
myApp.controller("myDateOfBirthController", function ($scope) {
	$scope.calculateAge = function calculateAge(DateOfBirth) { // birthday is a date
		var ageDifMs = Date.now() - DateOfBirth.getTime();
		var ageDate = new Date(ageDifMs); // milliseconds from epoch
		var myAge = Math.abs(ageDate.getUTCFullYear() - 1970);
		if (myAge >= 18){
			$scope.Eligibility = true;
		} 
		else {
			$scope.Eligibility = false;
		};
	};
});