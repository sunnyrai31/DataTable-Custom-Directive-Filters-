angular.module('scotchApp').filter('salaryGreaterThan', function() {

	return function(tableData, salary) {
		var resultData = [];

		for(var i=0; i<tableData.length ; i++) {
			if(tableData[i].salary >= salary) {
				resultData.push(tableData[i]);
			}
		}

		return resultData;


	}

	

});