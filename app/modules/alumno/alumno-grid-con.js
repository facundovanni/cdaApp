(function AlumnosGridScope(angular) {
  'use strict';

  angular.module('cdApp.alumno').controller('AlumnosGridController', ['$scope', 'Alumnos', '$uibModal', '$state','isLogged',
    function ($scope, Alumnos, $uibModal, $state, isLogged) {
      var that = this;

      that.init = function init() {
        if(that.setLogged()){
          that.getAlumnos();
        }
      };

      that.getAlumnos = function getAlumnos() {
        that.isLoading = true;
        Alumnos.grid().$promise.then(function (res) {
          that.data = res;
          that.setGrid();
        }).finally(function onFinally() {
          that.isLoading = false;
        });
      };

      that.setGrid = function setGrid() {
        that.grid = {
          enableRowSelection: true,
          enableRowHeaderSelection: false,
          enableSorting: true,
          enableFiltering: true,
          enableGridMenu: true,
          rowTemplate: "<div ng-dblclick=\"grid.appScope.ctrl.openCRUD(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",
          columnDefs: [{
            name: 'Legajo',
            field: 'legajo',
            width: '100'
          }, {
            name: 'Nombre',
            field: 'name'
          }, {
            name: 'Apellido',
            field: 'surname'
          }],
          data: that.data
        };
        that.showGrid = true;
      };

      that.modalInstance = {
        templateUrl: 'modules/alumno/alumno-crud.html',
        controller: 'AlumnosCRUDController as ctrl',
        size: 'md'
      };

      that.openCRUD = function openCRUD(grid, row) {
        that.modalInstance.resolve = {
          alumnoId: function getAlumnoId() {
            return row ? row.entity._id : undefined;
          }
        };

        $uibModal.open(that.modalInstance).result.then(function success() {
          that.getAlumnos();
        });
      }

      that.setLogged = function setLogged() {
        that.isLogged = isLogged();
        if (!that.isLogged) {
          $state.go('home-login');
        }
        return that.isLogged;
      };
      that.init();
    }
  ]);
})(angular);