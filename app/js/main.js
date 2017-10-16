/* eslint-disable indent */
const angular = require("angular");
const newsApp = angular.module("newsApp", []);
require("../controllers/WeatherCtrl.js")(newsApp);
require("../controllers/NewsListCtrl.js")(newsApp);
require("../controllers/LoadDataCtrl.js")(newsApp);
