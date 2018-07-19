angular.module('cdApp.alumno').controller('AlumnosCRUDController', ['$scope', 'Alumnos', '$uibModalInstance', 'items',
    function ($scope, Alumnos, $uibModalInstance, items) {
        var that = this;
        that.modalInstance = $uibModalInstance;
        that.hello = 'hola';

        that.items = items;
        that.selected = {
            item: that.items[0]
        };

        that.ok = function () {
            that.modalInstance.close(that.selected.item);
        };

        that.cancel = function () {
            that.modalInstance.dismiss('cancel');
        };
    }
]);