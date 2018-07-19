angular.module('cdApp.alumno')
    .factory('Alumnos', function ($http) {

        var crudFactory = {};

        //GET Alumnos
        crudFactory.getAlumnos = function () {
            return $http({
                url: "https://orttaller6.herokuapp.com/alumnos",
                method: 'GET'
            });
        };

        //CREATE Alumnos
        crudFactory.createAlumno = function (Alumno) {
            return $http({
                url: 'https://orttaller6.herokuapp.com/alumnos',
                method: 'POST',
                data: Alumno,
                hasBody: true,
                data: Alumno,
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            });
        };

        //UPDATE Alumnos
        crudFactory.updateAlumnos = function (Alumno) {
            return $http({
                url: 'https://orttaller6.herokuapp.com/alumnos',
                method: 'PUT',
                hasBody: true,
                data: Alumno,
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            });
        };

        //DELETE Alumnos
        crudFactory.deleteAlumnos = function (Alumnos) {
            return $http({
                url: 'https://orttaller6.herokuapp.com/alumnos',
                method: 'DELETE',
                hasBody: true,
                data: Alumnos,
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            });
        };

        return crudFactory;
    });