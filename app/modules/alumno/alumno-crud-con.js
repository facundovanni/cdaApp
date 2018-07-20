angular.module('cdApp.alumno').controller('AlumnosCRUDController', ['$scope', 'Alumnos', '$uibModalInstance', 'alumnoId', 'mode',
    function ($scope, Alumnos, $uibModalInstance, alumnoId, mode) {
        var that = this;
        that.modalInstance = $uibModalInstance;
        that.mode = mode;

        that.alumno = {
            _id: undefined,
            name: '',
            surname: '',
            legajo: '',
            materias: []
        };

        that.alumno._id = alumnoId;

        that.init = function init() {
            switch (that.mode) {
                case 'C':
                    that.title = 'Alta Alumno';
                    break;
                case 'U':
                    that.setAlumno();
                    that.title = 'Modificar Alumno';
                    break;
                case 'R':
                    that.title = 'Consultar Alumno';
                    break;
            }
        };

        that.setAlumno = function setAlumno() {
            Alumnos.get({ _id: alumnoId }).$promise.then(function onThen(res) {
                that.alumno = res;
            });
        };

        that.save = function save() {
            Alumnos.save(that.alumno).$promise.then(function onThen(res) {
                console.log(res);
                that.modalInstance.close();
            });
        }



        that.ok = function () {
            switch (that.mode) {
                case 'C':
                    that.save();
                    break;

            }

        };

        that.cancel = function () {
            that.modalInstance.dismiss('cancel');
        };

        that.init();
    }
]);