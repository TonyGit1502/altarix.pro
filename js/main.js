'use strict';

var newsApp = angular.module('newsApp', []);
const mask = "lsNews_";

newsApp.controller('NewsListCtrl', function($scope, $http){
	$scope.newsList = [];
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=316d3b9e0a304077840e29d0cdd834bc&q=Samara";
    $http({
        method : "GET",
        url : url
    }).then(function mySuccess(response) {
        $scope.newsList = response.data.response.docs;
        console.log($scope.newsList);
    }, function myError(response) {
        $scope.newsList = response.statusText;
    });
    $scope.saveData = function(e){
    	var index = localStorage.length;
		var obj = {
			date: e.$$watchers[0].last,
			news: e.$$watchers[1].last,
			title: e.$$watchers[2].last 
		};
		var serialNews = JSON.stringify(obj);
		localStorage.setItem(mask+index, serialNews);
		index++;	
    };
});

newsApp.controller('WeatherCtrl', function($scope, $http){
	$scope.weather = [];
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Samara&units=metric&appid=0a9eac8b755627181a3fc1f489d72309";
	$http({
		method: "GET",
		url: url
	}).then(function success(response){
		$scope.weather = response.data;
		console.log($scope.weather);
	}, function error(response){
		$scope.weather = response.statusText;
	});
});

newsApp.controller("OutputDataCtrl", function($scope){
	$scope.returnData = [];
	for(var i=0; i<localStorage.length; i++){
		$scope.returnData[i] = JSON.parse(localStorage.getItem(mask+i));
	}
});