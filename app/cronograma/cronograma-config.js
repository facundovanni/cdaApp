angular.module('cdApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cronograma', {
    templateUrl: 'cronograma/cronograma.html',
    controller: 'CronogramaController'
  });
}])