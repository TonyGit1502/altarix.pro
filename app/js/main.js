/* eslint-disable indent */
import angular from "angular";
import {WeatherCtrl} from "../controllers/WeatherCtrl";
import {NewsListCtrl} from "../controllers/NewsListCtrl";
import {OutputDataCtrl} from "../controllers/OutputDataCtrl";

angular.module("newsApp", [])
   .controller("WeatherCtrl", WeatherCtrl)
   .controller("NewsListCtrl", NewsListCtrl)
   .controller("OutputDataCtrl", OutputDataCtrl);