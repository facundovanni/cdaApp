(function VacationsScope(angular) {
    'use strict';
    angular.module('cdApp.materia')
        .service('Materias', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/materias/:id', null, {
                grid: {
                    method: 'GET',
                    isArray: true
                },
                save: {
                    method: 'POST',
                    url: 'https://orttaller6.herokuapp.com/materias',
                },
                getAlumnosList:{
                    method:'GET',
                    url:'https://orttaller6.herokuapp.com/alumnos/materias/:id',
                    isArray: true
                }
            }));


            that.getDefaultEntity = function getDefaultEntity() {
                return {
                    id: undefined,
                    name: undefined,
                    year: undefined,
                    division: undefined,
                    abreviatura: undefined
                };
            };
        }]);
})(window.angular);