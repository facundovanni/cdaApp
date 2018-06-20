angular.module('cdApp.cronograma', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cronograma/index', {
    templateUrl: 'modules/cronograma/cronograma.html',
    controller: 'CronogramaController'
  });
}])