angular.module('cdApp.alumno').controller('AlumnosCRUDController', ['$scope', 'Alumnos', '$uibModalInstance', 'alumnoId',
    function ($scope, Alumnos, $uibModalInstance, alumnoId) {
        var that = this;
        that.modalInstance = $uibModalInstance;

        that.alumno = Alumnos.getDefaultEntity();

        that.alumno._id = alumnoId;

        that.init = function init() {
            if (that.alumno._id) {
                that.title = 'Consulta de alumno';
                that.setAlumno();
                that.setEdit(false);
            } else {
                that.title = 'Alta de alumno';
                that.setEdit(true);
            }
        };

        that.setEdit = function setEdit(boolean) {
            that.disableName = !boolean;
            that.disableSurname = !boolean;
            that.disableLegajo = !boolean;
            that.isEditing = boolean;
        };

        that.setAlumno = function setAlumno() {
            that.isLoading = true;
            Alumnos.query().$promise.then(function onThen(res) {
                that.alumno = res.find(function find(fil) {
                    return fil._id === that.alumno._id;
                });
            }).finally(function onFinally() {
                that.isLoading = false;
            });
        };

        that.save = function save() {
            that.alumno._id ? that.update() :  that.createNew();
            
        };

        that.createNew = function createNew(){
            that.isLoading = true;
            Alumnos.save(that.alumno).$promise.then(function onThen(res) {
                that.modalInstance.close();
            });
            that.isLoading = false;
        }
        
        that.update = function update() {
            that.isLoading = true;
            Alumnos.update(that.alumno).$promise.then(function onThen(res) {
                that.modalInstance.close();
            })
            that.isLoading = false;
        }

        that.delete = function update() {
            Alumnos.remove(that.alumno).$promise.then(function onThen(res) {
                that.modalInstance.close();
            })
        }

        that.cancel = function () {
            that.modalInstance.dismiss();
        };

        that.init();
    }
]);