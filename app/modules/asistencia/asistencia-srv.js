(function AsistenciasScope(angular) {
    'use strict';
    angular.module('cdApp.asistencia')
        .service('Asistencias', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/asistencia/:id', null, {
                grid: {
                    url: 'https://orttaller6.herokuapp.com/asistencia/:id',
                    method: 'GET',
                    isArray: true
                },
                save: {
                    method: 'POST',
                    url: 'https://orttaller6.herokuapp.com/asistencia',
                }
            }));
        }]);
})(angular);