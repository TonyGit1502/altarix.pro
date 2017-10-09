'use strict';

var newsApp = angular.module('newsApp', []);

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

///////////////////////////////////////////////////////////////////
var mask = "lsNews_";
var index = 0;
function saveData(e){
	var newsBlock = document.getElementsByClassName("newsItem");
	var newsItem = e.parentNode;
	var obj = {
		title: newsItem.children[0].textContent,
		news: newsItem.children[1].textContent,
		date: newsItem.children[2].textContent 
	};
	var serialNews = JSON.stringify(obj);
	localStorage.setItem(mask+index, serialNews);
	index++;	
	return 0;
}
function deleteData(e){
	localStorage.removeItem(mask+e.getAttribute('data-news-index'));
	console.log("delete complete");
}

newsApp.controller("OutputDataCtrl", function($scope){
	var lsData;
	$scope.returnData = [];
	if(localStorage.length == 0){
		alert("localStorage is empty");
	}
	else{
		for(var i=0; i<localStorage.length; i++){
			lsData = localStorage.getItem(mask+i);
			$scope.returnData[i] = JSON.parse(lsData);
			// console.log($scope.returnData[i]);
			// // var outputData = document.getElementsByClassName()
		}
	}
});