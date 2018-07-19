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

    that.addNew = function addNew() {
      $state.go('/alumno/create');
    };
    that.items = ['item1', 'item2', 'item3'];

    that.open = function open() {
      /*var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;*/
      var modalInstance = {
        templateUrl: 'modules/alumno/alumno-crud.html',
        controller: 'AlumnosCRUDController as ctrl',
        size: 'xs',
        resolve: {
          items: function () {
            return that.items;
          }
        }
      };

      $uibModal.open(modalInstance).result.then(function success() {
        console.log('ok')
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

    that.init();
  }
]);