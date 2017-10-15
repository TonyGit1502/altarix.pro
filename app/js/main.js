/* eslint-disable indent */
const newsApp = angular.module("newsApp", []);
const mask = "lsNews_";
alert("Hello webpack");
// newsApp.controller("NewsListCtrl", ($scope, $filter, $http) => {
// 	$scope.searchData = function () {
//   $scope.newsList = [];
//   let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=316d3b9e0a304077840e29d0cdd834bc&";
//   let query = $scope.query;
//   url += "q=" + query;
//   $http({
//       method: "GET",
//       url
//   }).then((response) => {
//       $scope.newsList = response.data.response.docs;
//       console.log($scope.newsList);
//   }, (response) => {
//       $scope.newsList = response.statusText;
//   });
// 	};
// 	$scope.saveData = function (e) {
// 		let index = localStorage.length;
// 		const obj = {
// 			date: $filter("date")(e.pub_date, "dd.MM.yyyy"),
// 			news: e.snippet,
// 			title: e.headline.main};
// 		const serialNews = JSON.stringify(obj);
// 		localStorage.setItem(mask+index, serialNews);
// 		index++;
// 	};
// });
//
// newsApp.controller("WeatherCtrl", ($scope, $http) => {
// 	$scope.weather = [];
// 	const url = "http://api.openweathermap.org/data/2.5/weather?q=Samara&units=metric&appid=0a9eac8b755627181a3fc1f489d72309";
// 	$http({
// 		method: "GET",
// 		url
// 	}).then((response) => {
// 		$scope.weather = response.data;
// 		console.log($scope.weather);
// 	}, (response) => {
// 		$scope.weather = response.statusText;
// 	});
// });
//
// newsApp.controller("OutputDataCtrl", ($scope) => {
// 	$scope.returnData = [];
// 	for (let i=0; i<localStorage.length; i++) {
// 		$scope.returnData[i] = JSON.parse(localStorage.getItem(mask+i));
// 	}
// });