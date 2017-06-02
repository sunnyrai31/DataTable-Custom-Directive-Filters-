angular.module('scotchApp').controller('homeController', function($scope) {
	$scope.name ="sunny"
	$scope.checkName=function(){
        alert("home js called");
	}



	$scope.enginnerData = [
			{
				name: "kamlesh",
				company: "Cisco",
				city: "Bangalore",
				designation: "Software Enginner",
				experience: "4 years",
				salary: "50000"
			},
			{
				name: "ramesh",
				company: "globant",
				city: "Chennai",
				designation: "Software Enginner",
				experience: "5 years",
				salary: "10000"
			},
			{
				name: "rajesh",
				company: "ibm",
				city: "Delhi",
				designation: "Software Enginner",
				experience: "10 years",
				salary: "20000"
			},
			{
				name: "sunny",
				company: "Microsoft",
				city: "Bangalore",
				designation: "Software Enginner",
				experience: "4 years",
				salary: "15000"
			},
			{
				name: "avnesh",
				company: "Velocity",
				city: "Bangalore",
				designation: "Software Enginner",
				experience: "3.5 years",
				salary: "40000"
			}
		]


		$scope.enginnerData[0].name = "mac";

});
