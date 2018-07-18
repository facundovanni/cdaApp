// tag::module[]
angular.module('cdApp.alumno', ['ngResource', 'ngMaterial', 'ngRoute', 'ng-mfb'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/alumno/index', {
            templateUrl: 'modules/alumno/alumno.html',
            controller: 'AlumnosController',
        });
    }])