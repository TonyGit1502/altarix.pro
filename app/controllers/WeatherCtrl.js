angular
 .module("newsApp")
 .controller("WeatherCtrl", WeatherCtrl);
function WeatherCtrl($scope, $http) {
  $scope.weather = [];
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Samara&units=metric&appid=0a9eac8b755627181a3fc1f489d72309";
  $http({
   method: "GET",
   url
  }).then((response) => {
   $scope.weather = response.data;
   console.log($scope.weather);
   }, (response) => {
    $scope.weather = response.statusText;
  });
}