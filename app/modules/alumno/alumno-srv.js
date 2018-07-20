(function VacationsScope(angular) {
    'use strict';
    angular.module('cdApp.alumno')
        .service('Alumnos', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/alumnos/:id', null, {
                grid: {
                    method: 'GET',
                    isArray: true,
                    param: {
                        id: '@id'
                    }
                },
                save: {
                    method: 'POST',
                    url: 'https://orttaller6.herokuapp.com/alumnos',
                },
                update: {
                    url: 'https://orttaller6.herokuapp.com/alumnos/:id',
                    method: 'PUT',
                    params:{
                        id:'@id'
                    }
                }
            }));


            that.getDefaultEntity = function getDefaultEntity() {
                return {
                    _id: undefined,
                    name: '',
                    surname: '',
                    legajo: '',
                    materias: []
                };
            };
        }]);
})(window.angular);