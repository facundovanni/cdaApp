(function CronogramasScope(angular) {
    'use strict';
    angular.module('cdApp.cronograma')
        .service('Cronogramas', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/cronograma', null, {
                grid: {
                    url: 'https://orttaller6.herokuapp.com/cronograma/:id',
                    method: 'GET',
                    isArray: true
                }
            }));

            that.getDefaultEntity = function getDefaultEntity() {
                return {
                    _id: undefined,
                    year: undefined,
                    division: undefined,
                    horarios: [{ hora: '1', lunes: '', martes: '', miercoles: '', jueves: '' },
                    { hora: '2', lunes: '', martes: '', miercoles: '', jueves: '' },
                    { hora: '3', lunes: '', martes: '', miercoles: '', jueves: '' },
                    { hora: '4', lunes: '', martes: '', miercoles: '', jueves: '' },
                    { hora: '5', lunes: '', martes: '', miercoles: '', jueves: '' },
                    { hora: '6', lunes: '', martes: '', miercoles: '', jueves: '' },]
                }
            };
        }]);
})(angular);