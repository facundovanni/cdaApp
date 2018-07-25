(function MateriaGridScope(angular) {
    'use strict';
  
angular.module('cdApp.materia').controller('MateriasCRUDController', ['$scope', 'Materias', '$uibModalInstance', 'materiaId',
    function ($scope, Materias, $uibModalInstance, materiaId) {
        var that = this;
        that.modalInstance = $uibModalInstance;

        that.materia = Materias.getDefaultEntity();

        that.materia.id = materiaId;

        that.init = function init() {
            if (that.materia.id) {
                that.title = 'Consulta de materia';
                that.setMateria();
                that.setEdit(false);
            } else {
                that.title = 'Alta de materia';
                that.setEdit(true);
            }
        };

        that.setEdit = function setEdit(boolean) {
            that.disabled = !boolean;
            that.isEditing = boolean;
        };

        that.setMateria = function setMateria() {
            that.isLoading = true;
            Materias.getById(that.materia.id).$promise.then(function onThen(res) {
                that.materia = res;
                that.materia.id = res._id;
                that.materia._id= undefined;
                
            }).finally(function onFinally() {
                that.isLoading = false;
            });
        };

        that.save = function save() {
            that.materia.id ? that.update() :  that.createNew();
        };

        that.createNew = function createNew(){
            that.isLoading = true;
            Materias.save(that.materia).$promise.then(function onThen(res) {
                that.modalInstance.close();
            });
            that.isLoading = false;
        }
        
        that.update = function update() {
            that.isLoading = true;
            Materias.update(that.materia).$promise.then(function onThen(res) {
                that.modalInstance.close();
            });
            that.isLoading = false;
        }

        that.delete = function update() {
            Materias.remove(that.materia).$promise.then(function onThen(res) {
                that.modalInstance.close();
            })
        }

        that.cancel = function () {
            that.modalInstance.dismiss();
        };

        that.init();
    }
]);
})(angular);