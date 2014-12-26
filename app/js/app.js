'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('errorHandlerHttpInterceptor');

        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeCtrl'
            })
            .when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/partial1', {
                templateUrl: 'views/partials/partial1.html',
                controller: 'MyCtrl1'
            })
            .when('/partial2', {
                templateUrl: 'views/partials/partial2.html',
                controller: 'MyCtrl2'
            })
            .otherwise({ redirectTo: '/partial1' });
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://localhost:1337');