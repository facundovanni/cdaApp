'use strict';
angular.module('cdApp.cronograma').controller('CronogramaController', ['$scope', function ($scope) {

  var that = this;

  that.data = [
    {
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
    }
  ];

  that.grid = {
    columns: [
      {
        name: 'Hora'
      }, {
        name: 'Lunes'
      },
      {
        name: 'Martes'
      },
      {
        name: 'Miércoles'
      },
      {
        name: 'Jueves'
      }
    ],
    data: that.data
  };

}]);