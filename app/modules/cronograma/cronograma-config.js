(function CronogramasConfigScope(angular) {
    'use strict';  
// tag::module[]
angular.module('cdApp.cronograma', ['ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cronograma/index', {
            templateUrl: 'modules/cronograma/cronograma-grid.html',
            controller: 'CronogramasGridController',
        });
        $routeProvider.when('/cronograma/create', {
            templateUrl: 'modules/cronograma/cronograma-crud.html',
            controller: 'CronogramasCRUDController',
        });
}]);
})(angular);