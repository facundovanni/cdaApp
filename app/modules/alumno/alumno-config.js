// tag::module[]
angular.module('cdApp.alumno', ['ngResource', 'ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/alumno/index', {
            templateUrl: 'modules/alumno/alumno-grid.html',
            controller: 'AlumnosController',
        });
        $routeProvider.when('/alumno/create', {
            templateUrl: 'modules/alumno/alumno-crud.html',
            controller: 'AlumnosCRUDController',
        });
}])