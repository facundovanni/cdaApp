(function AsistenciasConfigScope(angular) {
    'use strict';
    angular.module('cdApp.asistencia', ['ngResource','ngFileSaver'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/asistencia/index', {
                templateUrl: 'modules/asistencia/asistencia-grid.html'
            });
        }]);
})(angular);