(function CronogramasGridScope(angular) {
  'use strict';

  angular.module('cdApp.cronograma').controller('CronogramasGridController', ['$scope', 'Cronogramas', '$state', '$uibModal',
    function ($scope, Cronogramas, $state, $uibModal) {
      var that = this;
      that.grids = [];
      that.init = function init() {
        that.getCronogramas();
      };

      that.getCronogramas = function getCronogramas() {
        that.isLoading = true;
        Cronogramas.query().$promise.then(function (res) {
          that.data = res;
          that.configureGrids();
        }).finally(function onFinally() {
          that.showGrid = true;
          that.isLoading = false;
        });
      };

      that.configureGrids = function configureGrids() {
        that.data.forEach(function forEach(data) {
          that.grids.push(that.setGrid(data));
        });
      }

      that.setGrid = function setGrid(data) {
        var grid = {
          enableRowSelection: true,
          enableRowHeaderSelection: false,
          enableSorting: true,
          enableFiltering: true,
          enableGridMenu: true,
          rowTemplate: "<div ng-dblclick=\"grid.appScope.ctrl.openCRUD(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",
          columnDefs: [{
            name: 'Hora',
            field: 'hora',
            width: '100'
          }, {
            name: 'Lunes',
            field: 'lunes',
            width: '100'
          }, {
            name: 'Martes',
            field: 'martes',
            width: '100'
          }, {
            name: 'Miércoles',
            field: 'miercoles',
            width: '100'
          }, {
            name: 'Jueves',
            field: 'jueves',
            width: '100'
          }],
          data: data.horarios,
          description: data.year + '-' + data.division,
          cronogramaId: data._id
        };
        return grid;
      };

      that.modalInstance = {
        templateUrl: 'modules/cronograma/cronograma-crud.html',
        controller: 'CronogramasCRUDController as ctrl',
        size: 'md'
      };

      that.openCRUD = function openCRUD(grid, row) {
        that.modalInstance.resolve = {
          cronogramaId: function getcronogramaId() {
            return row ? grid.options.cronogramaId : undefined;
          },
          hora: function getHora() {
            return row ? row.entity.hora : undefined;
          }
        };

        $uibModal.open(that.modalInstance).result.then(function success() {
          that.getCronogramas();
        });
      }

      that.init();
    }
  ]);
})(angular);