(function MateriaConfigScope(angular) {
    'use strict';

    // tag::module[]
    angular.module('cdApp.materia', ['ngResource'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/materia/index', {
                templateUrl: 'modules/materia/materia-grid.html',
                controller: 'MateriasGridController',
            });
            $routeProvider.when('/materia/create', {
                templateUrl: 'modules/materia/materia-crud.html',
                controller: 'MateriasCRUDController',
            });
        }]);
})(angular);