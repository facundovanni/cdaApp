(function AlumnosScope(angular) {
    'use strict';
    angular.module('cdApp.alumno')
        .service('Alumnos', ['ServicesModel', function (ServicesModel) {
            var that = this;
            angular.extend(this, ServicesModel.create('https://orttaller6.herokuapp.com/alumnos', null, {
                grid: {
                    method: 'GET',
                    isArray: true
                },
                get:{
                    method:'GET',
                    url:'https://orttaller6.herokuapp.com/alumnos/:id',
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
})(angular);