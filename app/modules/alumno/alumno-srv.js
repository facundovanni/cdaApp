(function AlumnosScope(angular) {
    'use strict';
    angular.module('cdApp.alumno')
        .service('Alumnos', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/alumnos/:id', null, {
                grid: {
                    method: 'GET',
                    isArray: true
                },
                save: {
                    method: 'POST',
                    url: 'https://orttaller6.herokuapp.com/alumnos',
                }
            }));


            that.getDefaultEntity = function getDefaultEntity() {
                return {
                    id: undefined,
                    name: '',
                    surname: '',
                    legajo:'',
                    materias:[]
                };
            };
        }]);
})(angular);