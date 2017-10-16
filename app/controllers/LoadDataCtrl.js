angular
	.module("newsApp")
	.controller("OutputDataCtrl", OutputDataCtrl);
const mask = "lsNews_";
function OutputDataCtrl($scope) {
  $scope.returnData = [];
  for (let i=0; i<localStorage.length; i++) {
   $scope.returnData[i] = JSON.parse(localStorage.getItem(mask+i));
  }
}
