'use strict'

var app = angular.module('adsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);