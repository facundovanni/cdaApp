(function CronogramasCRUDScope(angular) {
    'use strict';

    angular.module('cdApp.cronograma').controller('CronogramasCRUDController',
        ['$scope', 'Cronogramas', '$uibModalInstance', 'cronogramaId', 'hora', 'Materias',
            function ($scope, Cronogramas, $uibModalInstance, cronogramaId, hora, Materias) {
                var that = this;
                that.modalInstance = $uibModalInstance;
                that.validateError = {
                    text: 'Campo requerido'
                };
                that.hora = hora;
                that.materias = [];
                that.cronograma = Cronogramas.getDefaultEntity();

                that.cronograma._id = cronogramaId;

                that.init = function init() {
                    if (that.cronograma._id) {
                        that.title = 'Consulta de cronograma';
                        that.setCronograma();
                        that.setEdit(false);
                    } else {
                        that.title = 'Alta de cronograma';
                        that.getMaterias();
                        that.setEdit(true);
                    }
                };

                that.setEdit = function setEdit(boolean) {
                    that.disabled = !boolean;
                    that.isEditing = boolean;
                };

                that.setCronograma = function setCronograma() {
                    that.isLoading = true;
                    that.getMaterias().then(function onThen() {
                        Cronogramas.get({ id: that.cronograma._id }).$promise.then(function onThen(res) {
                            that.cronograma = res;
                            that.materiasSelected = that.cronograma.horarios.find(function find(obj) {
                                return obj.hora === that.hora;
                            });
                        });
                    }).finally(function onFinally() {
                        that.isLoading = false;
                    });
                };

                that.save = function save() {
                    that.cronograma._id ? that.update() : that.createNew();
                };

                that.createNew = function createNew() {
                    that.isLoading = true;
                    Cronogramas.save(that.cronograma).$promise.then(function onThen(res) {
                        that.modalInstance.close();
                    });
                    that.isLoading = false;
                }

                that.update = function update() {
                    that.isLoading = true;
                    Cronogramas.update(that.cronograma).$promise.then(function onThen(res) {
                        that.modalInstance.close();
                    });
                    that.isLoading = false;
                }

                that.delete = function update() {
                    Cronogramas.remove([{ _id: that.cronograma._id }]).$promise.then(function onThen(res) {
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
                    return !(that.validateError.legajo = !that.cronograma.legajo);
                };
                that.validateName = function validateName() {
                    return !(that.validateError.name = !that.cronograma.name);
                };
                that.validateSurname = function validateSurname() {
                    return !(that.validateError.surname = !that.cronograma.surname);
                };

                that.getMaterias = function getMaterias() {
                    return Materias.query().$promise.then(function onThen(res) {
                        that.materias = res;
                    });
                };

                that.init();
            }
        ]);
})(angular);