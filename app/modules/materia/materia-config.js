(function MateriaConfigScope(angular) {
    'use strict';

    // tag::module[]
    angular.module('cdApp.materia', ['ngResource'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/materia/index', {
                templateUrl: 'modules/materia/materia-grid.html'
            });
        }]);
})(angular);