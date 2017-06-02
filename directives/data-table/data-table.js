angular.module('scotchApp').directive('sunnyDataTable', function() {

	return {
		restrict : "E",
		scope: {
			tableData: "=myData"
		},
		controller: function($scope) {
			$scope.selectedArea = "name";
			$scope.selectedPerPage = 6;
			$scope.selectedSalary = 20000;

			$scope.myname = "sunny rai";

			$scope.changeName = function() {
				$scope.myname = "kamlesh verma";
			}
		},
		templateUrl: "../directives/data-table/data-table.html"

	}

	

});

