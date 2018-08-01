(function AsistenciasScope(angular) {
    'use strict';
    angular.module('cdApp.asistencia')
        .service('Asistencias', ['ServicesModel', '$http', function (ServicesModel, $http) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/asistencia', null, {
                get: {
                    url: 'https://orttaller6.herokuapp.com/asistencia/:date',
                    method: 'GET',
                    param: {
                        date: '@date'
                    }
                }
            }));

            that.reporte = function reporte(id){
                return $http({
                    method: 'GET',
                    url: 'https://orttaller6.herokuapp.com/reporte?filter=dia&id='+ id,
                    responseType:'blob'
                }) 
            }
        }]);
})(angular);