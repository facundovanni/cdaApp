(function AlumnosConfigScope(angular) {
    'use strict';
    // tag::module[]
    angular.module('cdApp.alumno', ['ngResource'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/alumno/index', {
                templateUrl: 'modules/alumno/alumno-grid.html'
            });
        }]);
})(angular);