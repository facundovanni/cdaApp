angular.module('cdApp.alumno').controller('AlumnosController', ['$scope', 'Alumnos', '$state',
  function ($scope, Alumnos, $state) {
    that = this;

    that.init = function init() {
      Alumnos.query().$promise.then(function (res) {
        that.data = res;
        that.setGrid();
      });
    };

    that.setGrid = function setGrid() {
      that.grid = {
        enableSorting: true,
        columnDefs: [
          { name: 'Nombre', field: 'name' },
          { field: 'legajo' }
        ],
        data: that.data
      };
      that.showGrid = true;
    };

    that.addNew = function addNew() {
      $state.go('/alumno/create');
    };

    that.init();
  }]);