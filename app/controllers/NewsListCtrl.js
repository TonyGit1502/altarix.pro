newsApp.controller("NewsListCtrl", ($scope, $filter, $http) => {
	$scope.searchData = function () {
  $scope.newsList = [];
  let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=316d3b9e0a304077840e29d0cdd834bc&";
  let query = $scope.query;
  url += "q=" + query;
  $http({
      method: "GET",
      url
  }).then((response) => {
      $scope.newsList = response.data.response.docs;
      console.log($scope.newsList);
  }, (response) => {
      $scope.newsList = response.statusText;
  });
	};
	$scope.saveData = function (e) {
		let index = localStorage.length;
		const obj = {
			date: $filter("date")(e.pub_date, "dd.MM.yyyy"),
			news: e.snippet,
			title: e.headline.main};
		const serialNews = JSON.stringify(obj);
		localStorage.setItem(mask+index, serialNews);
		index++;
	};
});