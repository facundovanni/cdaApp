(function AsistenciasGridScope(angular) {
  'use strict';
  angular.module('cdApp.asistencia').controller('AsistenciasGridController', ['$scope', 'Asistencias', '$uibModal', 'Materias', '$q', '$state', 'isLogged',
    function AsistenciasGridController($scope, Asistencias, $uibModal, Materias, $q, $state, isLogged) {
      var that = this;

      that.dateSelected = {
        value: new Date(),
        opened: false,
        error: 'Fecha incorrecta, sólo de lunes a jueves'
      }

      that.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(that.dateSelected.value.getFullYear(), 11, 31),
        minDate: new Date(that.dateSelected.value.getFullYear(), 0, 1),
        startingDay: 0
      };

      that.openDate = function openDate() {
        that.dateSelected.opened = true;
      };

      $scope.$watch('ctrl.dateSelected.value', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          that.init();
        };
      });


      function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 5);
      }

      that.getAsistencias = function getAsistencias() {
        that.setDateJSON();
        that.isLoading = true;
        Asistencias.get({ date: that.dateJSON }).$promise.then(function (res) {
          that.data = res;
          that.data.date = that.dateSelected.value;
          if (!that.data._id) {
            that.getDefault();
          } else {
            that.setConfiguration();
          }
        });
      };

      that.setDateJSON = function setDateJSON(){
        var auxDate = that.dateSelected.value.toJSON().split('T');
        auxDate[1] = '00:00:00';
        that.dateJSON = auxDate.join('T');
      };

      that.setConfiguration = function setConfiguration() {
        that.configureGrids();
        that.showGrid = true;
        that.isLoading = false;
      }

      that.getDefault = function getDefault() {
        Materias.query().$promise.then(function onThen(materias) {
          that.materias = materias;
          that.getAlumnosList().then(function onThen(listOfAlumnos) {
            that.setMateriaAlumnos(listOfAlumnos);
            that.data = {
              id: undefined,
              date: that.dateJSON,
              materias: that.materias
            };
            that.setConfiguration();
          });


        });
      };

      that.getAlumnosList = function getAlumnosList() {
        var promises = [];
        that.materias.forEach(function onMap(mat) {
          promises.push(Materias.getAlumnosList({ id: mat._id }).$promise);
        });
        return $q.all(promises);

      };
      that.setMateriaAlumnos = function setMateriaAlumnos(listOfAlumnos) {
        for (var i = 0; i < that.materias.length - 1; i++) {
          that.materias[i].alumnos = that.mapListAlumnos(listOfAlumnos[0]);
        }
      };

      that.mapListAlumnos = function (list) {
        return list.map(function onMap(alumno) {
          alumno.presente = false;
          return alumno;
        })

      };

      that.configureGrids = function configureGrids() {
        that.data.materias.forEach(function forEach(data) {
          that.grids.push(that.setGrid(data));
        });
      }

      that.setGrid = function setGrid(data) {
        var grid = {
          enableCellEditOnFocus: true,
          enableColumnResizing: true,
          enableFiltering: true,
          enableGridMenu: true,
          showGridFooter: true,
          showColumnFooter: true,
          fastWatch: true,
          columnDefs: [{
            name: 'Legajo',
            field: 'legajo',
            width: '100',
            enableCellEdit: false
          }, {
            name: 'Nombre',
            field: 'name',
            width: '200',
            enableCellEdit: false
          }, {
            name: 'Apellido',
            field: 'surname',
            width: '200',
            enableCellEdit: false
          }, {
            name: 'Presente',
            field: 'presente',
            type: 'boolean',
            width: '100',
            cellTemplate: '<div class="ui-grid-cell-contents" ng-click=\"grid.appScope.ctrl.setActive(row)\"><input type="checkbox" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>',
            enableCellEdit: true
          }],
          data: data.alumnos,
          asistenciaId: data._id,
          descripcion: data.name
        };
        return grid;
      };
      that.setActive = function setActive(row) {
        return row.entity.presente = !row.entity.presente;
      };

      that.init = function init() {
        if(that.setLogged()){
          that.showAlert = false;
          var date = { date: that.dateSelected.value, mode: 'day' };
          that.isAvailable = !(that.dateOptions.dateDisabled(date));
          if (that.isAvailable) {
            that.grids = [];
            that.materias = [];
            that.getAsistencias();
          };
        }
      };

      that.save = function save() {
        that.data._id ? that.update() : that.createNew();

      };
      that.createNew = function createNew() {
        that.isLoading = true;
        Asistencias.save(that.data).$promise.then(function onThen(res) {
          that.alert = 'Guardado';
          that.showAlert = true;
        });
        that.isLoading = false;
      }

      that.update = function update() {
        that.isLoading = true;
        Asistencias.update(that.data).$promise.then(function onThen(res) {
          that.alert = 'Guardado';
          that.showAlert = true;
        });
        that.isLoading = false;
      };

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