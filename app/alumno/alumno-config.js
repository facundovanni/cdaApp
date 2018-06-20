// tag::module[]
angular.module('cdApp.alumno', ['ngResource', 'ngMaterial', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/alumno', {
            templateUrl: 'alumno/alumno.html',
            controller: 'AlumnosController',
        });
    }])