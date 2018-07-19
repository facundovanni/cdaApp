// tag::module[]
angular.module('cdApp.alumno', ['ngResource', 'ngMaterial', 'ngRoute'])
    .config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {

        var createState = {
            name: 'create',
            url: '/alumno/create',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(createState);

        $routeProvider.when('/alumno/index', {
            templateUrl: 'modules/alumno/alumno-grid.html',
            controller: 'AlumnosController',
        });
        $routeProvider.when('/alumno/create', {
            templateUrl: 'modules/alumno/alumno-crud.html',
            controller: 'AlumnoCRUDController',
            scope: { type: 'C' }
        });

    }])