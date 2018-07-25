(function MateriaGridScope(angular) {
  'use strict';

  angular.module('cdApp.materia').controller('MateriasGridController', ['$scope', 'Materias', '$state', '$uibModal',
    function ($scope, Materias, $state, $uibModal) {
      var that = this;

      that.init = function init() {
        that.getMaterias();
      };
 
      that.getMaterias = function getMaterias() {
        that.isLoading = true;
        Materias.grid().$promise.then(function (res) {
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
            name: 'Clave',
            field: 'key',
            width: '100'
          }, {
            name: 'Nombre',
            field: 'name'
          }],
          data: that.data
        };
        that.showGrid = true;
      };

      that.modalInstance = {
        templateUrl: 'modules/materia/materia-crud.html',
        controller: 'MateriasCRUDController as ctrl',
        size: 'md'
      };

      that.openCRUD = function openCRUD(grid, row) {
        that.modalInstance.resolve = {
          materiaId: function getMateriaId() {
            return row ? row.entity._id : undefined;
          }
        };

        $uibModal.open(that.modalInstance).result.then(function success() {
          that.getMaterias();
        });
      }

      that.init();
    }
  ]);
})(angular);