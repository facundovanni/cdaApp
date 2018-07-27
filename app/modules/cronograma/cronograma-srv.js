(function CronogramasScope(angular) {
    'use strict';
    angular.module('cdApp.cronograma')
        .service('Cronogramas', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/cronograma/:id', null, {
                grid: {
                    url: 'https://orttaller6.herokuapp.com/cronograma/:id',
                    method: 'GET',
                    isArray: true
                },
                save: {
                    method: 'POST',
                    url: 'https://orttaller6.herokuapp.com/cronograma',
                }
            }));

            that.getDefaultEntity = function getDefaultEntity() {
                return {
                    id: undefined,
                    year: undefined,
                    division: undefined,
                    horarios: []
                }
            };
        }]);
})(angular);