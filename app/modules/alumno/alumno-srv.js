angular.module('cdApp.alumno')
    .factory('Alumnos', function ($resource) {
        return $resource("https://orttaller6.herokuapp.com/alumnos");
    });