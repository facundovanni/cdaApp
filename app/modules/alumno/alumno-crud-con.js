(function AlumnosCRUDScope(angular) {
    'use strict';

    angular.module('cdApp.alumno').controller('AlumnosCRUDController',
        ['$scope', 'Alumnos', '$uibModalInstance', 'alumnoId', 'Materias',
            function ($scope, Alumnos, $uibModalInstance, alumnoId, Materias, isLogged) {
                var that = this;
                that.modalInstance = $uibModalInstance;
                that.validateError = {
                    text: 'Campo requerido'
                };
                that.getDataMaterias = [];
                that.selectedMaterias = [];
                that.alumno = Alumnos.getDefaultEntity();

                that.alumno._id = alumnoId;

                that.init = function init() {
                    if (that.isLogged()) {
                        if (that.alumno._id) {
                            that.title = 'Consulta de alumno';
                            that.setAlumno();
                            that.setEdit(false);
                        } else {
                            that.title = 'Alta de alumno';
                            that.getMaterias();
                            that.setEdit(true);
                        }
                    }
                };

                that.setEdit = function setEdit(boolean) {
                    that.disabled = !boolean;
                    that.isEditing = boolean;
                };

                that.setAlumno = function setAlumno() {
                    that.isLoading = true;
                    Alumnos.get({ id: that.alumno._id }).$promise.then(function onThen(res) {
                        that.alumno = res;
                        that.getMaterias();
                    }).finally(function onFinally() {
                        that.isLoading = false;
                    });
                };

                that.save = function save() {
                    that.setMaterias();
                    if (that.validate()) {

                        that.alumno._id ? that.update() : that.createNew();
                    }
                };

                that.createNew = function createNew() {
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
                    });
                    that.isLoading = false;
                }

                that.delete = function deleteAlumno() {
                    Alumnos.remove([{ _id: that.alumno._id }]).$promise.then(function onThen(res) {
                        that.modalInstance.close();
                    })
                }

                that.cancel = function () {
                    that.modalInstance.dismiss();
                };

                that.validate = function validate() {
                    return that.validateLegajo() && that.validateName() && that.validateSurname();
                };

                that.validateLegajo = function validateLegajo() {
                    return !(that.validateError.legajo = !that.alumno.legajo);
                };
                that.validateName = function validateName() {
                    return !(that.validateError.name = !that.alumno.name);
                };
                that.validateSurname = function validateSurname() {
                    return !(that.validateError.surname = !that.alumno.surname);
                };

                that.getMaterias = function getMaterias() {
                    that.isLoading = true;
                    Materias.query().$promise.then(function onThen(res) {
                        var i = 1;
                        res.map(function onMap(obj) {
                            that.getDataMaterias.push({ id: i, label: obj.name, idMat: obj._id });
                            if (that.alumno.materias.length > 0) {
                                var aux = that.alumno.materias.find(function onFind(el) {
                                    return obj._id === el.id;
                                });
                                if (aux) {
                                    that.selectedMaterias.push({ id: i });
                                }
                            }
                            i++;
                        });
                    }).finally(function onFinally() {
                        that.isLoading = false;
                    });

                };
                //Dado que el componente no deja bien, tengo que hacer esto
                that.setMaterias = function setMaterias() {
                    that.alumno.materias.splice(0);
                    that.selectedMaterias.map(function forEach(obj) {
                        var aux = that.getDataMaterias.find(function find(el) {
                            return obj.id === el.id;
                        });
                        that.alumno.materias.push({ id: aux.idMat, name: aux.label });
                    });
                };
                that.init();
            }
        ]);
})(angular);