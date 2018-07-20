angular.module('cdApp.alumno').controller('AlumnosController', ['$scope', 'Alumnos', '$state', '$uibModal',
  function ($scope, Alumnos, $state, $uibModal) {
    that = this;

    that.init = function init() {
      that.getAlumnos();
    };

    that.getAlumnos = function getAlumnos() {
      Alumnos.query().$promise.then(function (res) {
        that.data = res;
        that.setGrid();
      });
    };

    that.setGrid = function setGrid() {
      that.grid = {
        enableSorting: true,
        columnDefs: [{
          name: 'Nombre',
          field: 'name'
        },
        {
          field: 'legajo'
        }
        ],
        data: that.data
      };
      that.showGrid = true;
    };

    that.modalInstance = {
      templateUrl: 'modules/alumno/alumno-crud.html',
      controller: 'AlumnosCRUDController as ctrl',
      size: 'lg'
    };



    that.addNew = function open() {
      that.modalInstance.resolve = {
        alumnoId: function getAlumnoId(){
          return undefined;
        },
        mode: function getMode(){
          return 'C';
        }
      };

      $uibModal.open(that.modalInstance).result.then(function success() {
        that.getAlumnos();
      });
    };

    that.init();
  }
]);