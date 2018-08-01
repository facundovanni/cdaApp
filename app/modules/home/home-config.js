(function HomeConfigScope(angular) {
    'use strict';
    // tag::module[]
    angular.module('cdApp.home', ['ngResource', 'ui.router'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home/index', {
                templateUrl: 'modules/home/home.html'
            });
        }]);
})(angular);