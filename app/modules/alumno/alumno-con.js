angular.module('cdApp.alumno').controller('AlumnosController', function ($scope, Alumnos) {
    /*Alumnos.query(function (data) {
        console.log(data);
        $scope.results = data;
    }, function (err) {
        console.error("Error occured: ", err);
    });*/

    //Get Company List
    Alumnos.getAlumnos().then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.results = response.data;


    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.

    });

    $scope.deleteAlums = function(alumnos)
    {
        const responseAlumnos = [];

        console.log(alumnos)

        alumnos.forEach(element => {
            console.log('Element ' + element._id);

            var response = { "id": element._id };

            responseAlumnos.push(response);
        });

        Alumnos.deleteAlumnos(responseAlumnos).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            Alumnos.getAlumnos().then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $(document).ready(function() {
                    $("#myModal").modal('hide');
                  });
                  
                $scope.results = response.data;
        
        
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
        
            });
    
    
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
    
        });

        
    };
});