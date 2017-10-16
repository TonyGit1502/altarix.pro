export class NewsListCtrl {
	static get $inject() {
		return ["$http", "$scope", "$filter"];
	}
	constructor($http, $scope, $filter) {
		const mask = "lsNews_";
		$scope.searchData = function () {
			$scope.newsList = [];
			let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=316d3b9e0a304077840e29d0cdd834bc&";
			const query = $scope.query;
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
	}
}