'use strict'

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination']);

//app.constant('baseServiceUrl', 'http://localhost:1337/api/');
app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl'
    });
    $routeProvider.when('/register', {
        templateUrl: '/templates/register.html',
        controller: 'RegisterCtrl'
    });
    $routeProvider.when('/user/ads/publish', {
        templateUrl: '/templates/publish-ad.html',
        controller: 'PublishAdCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });


//    // Web storages
//    localStorageServiceProvider.setStorageType('localStorage');
//    localStorageServiceProvider.setPrefix('adsApp');
}]);