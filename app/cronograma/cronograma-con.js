'use strict';
angular.module('cdApp', ['ngRoute']).controller('CronogramaController', ['$scope', function($scope) {
  $scope.data = [{
    hora: '1',
    lunes: 'DS',
    martes: 'IT',
    miercoles: 'AP',
    jueves: 'T6'
  }, {
    hora: '2',
    lunes: 'DS',
    martes: 'IT',
    miercoles: 'AP',
    jueves: 'T6'
  }, {
    hora: '3',
    lunes: 'DS',
    martes: 'IT',
    miercoles: 'AP',
    jueves: 'T6'
  }, {
    hora: '4',
    lunes: 'DS',
    martes: 'IT',
    miercoles: 'AP',
    jueves: 'T6'
  }, {
    hora: '5',
    lunes: 'DS',
    martes: 'TS',
    miercoles: 'OP',
    jueves: 'TS'
  }, {
    hora: '6',
    lunes: 'DS',
    martes: 'TS',
    miercoles: 'OP',
    jueves: 'TS'
  }];
}]);