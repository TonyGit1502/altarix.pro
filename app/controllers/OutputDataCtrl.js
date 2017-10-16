export class OutputDataCtrl {
	static get $inject() {
		return ["$scope"];
	}
	constructor($scope) {
		const mask = "lsNews_";
		$scope.returnData = [];
		for (let i=0; i<localStorage.length; i++) {
			$scope.returnData[i] = JSON.parse(localStorage.getItem(mask+i));
		}
	}
}