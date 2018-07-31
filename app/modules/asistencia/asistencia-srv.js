(function AsistenciasScope(angular) {
    'use strict';
    angular.module('cdApp.asistencia')
        .service('Asistencias', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/asistencia', null, {
                get:{
                    url: 'https://orttaller6.herokuapp.com/asistencia/:date',
                    method:'GET',
                    param:{
                        date:'@date'
                    }
                }
            }));
        }]);
})(angular);