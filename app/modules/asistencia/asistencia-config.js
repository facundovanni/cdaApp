(function AsistenciasConfigScope(angular) {
    'use strict';
    angular.module('cdApp.asistencia', ['ngResource'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/asistencia/index', {
                templateUrl: 'modules/asistencia/asistencia-grid.html',
                controller: 'AsistenciasGridController',
            });
        }]);
})(angular);