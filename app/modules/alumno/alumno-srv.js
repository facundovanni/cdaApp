// tag::module[]
/*angular.module('cdApp.alumno')
    .factory('Alumnos', function ($resource) {
        return $resource("http://LAPTOP-BQPLIEJU:8080/alumnos");
    });*/

angular.module('cdApp.alumno')
    .factory('Alumnos', function ($http) {

        var crudFactory = {};

        //GET Alumnos
        crudFactory.getAlumnos = function () {
            return $http({
                url: "http://LAPTOP-BQPLIEJU:8080/alumnos",
                method: 'GET'
            });
        };

        //DELETE Alumnos
        crudFactory.deleteAlumnos = function (Alumnos) {
            return $http({
                url: 'http://LAPTOP-BQPLIEJU:8080/alumnos',
                method: 'DELETE',
                hasBody: true,
                data: Alumnos,
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            });
        };

        return crudFactory;

    });