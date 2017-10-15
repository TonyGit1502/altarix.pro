newsApp.controller("OutputDataCtrl", ($scope) => {
	$scope.returnData = [];
	for (let i=0; i<localStorage.length; i++) {
		$scope.returnData[i] = JSON.parse(localStorage.getItem(mask+i));
	}
});