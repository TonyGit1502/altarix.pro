'use strict';
var newsApp = angular.module('newsApp', []);
newsApp.controller('NewsListCtrl', function($scope){
	$scope.newsList = [];
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "316d3b9e0a304077840e29d0cdd834bc",
	  'q': "Samara"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  // console.log(result);
	  $scope.newsList = result.response.docs;
	  console.log($scope.newsList);
	}).fail(function(err) {
	  throw err;
	});
});


