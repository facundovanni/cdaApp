angular.module('cdApp.alumno').controller('AlumnosController', function ($scope, Alumnos) {
    Alumnos.query(function (data) {
        console.log(data);
        $scope.results = data;
    }, function (err) {
        console.error("Error occured: ", err);
    });
});