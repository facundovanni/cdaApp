// tag::module[]
var app = angular.module('AppAlumno', ['ngResource', 'ngMaterial']);
// end::module[]

// tag::factory[]
app.factory("results", function($resource) {
    return $resource("https://orttaller6.herokuapp.com/alumnos");
});
// end::factory[]

// tag::controller[]
app.controller("test", function($scope, results) {
    results.query(function(data) {
        console.log(data);
        $scope.results = data;
    }, function(err) {
        console.error("Error occured: ", err);
    });

    
});
// end::controller[]

app.controller('BorrarAlumnoController', ['$scope', function ($form) {
    $form.submit = function (list) {
        $form.alumnos = [];

        angular.forEach(list, function (value, key) {
            if (list[key].selected) {
                $form.alumnos.push(list[key]);
            }
        });

        // SHOW THE SELECTED ITEMS IN THE EXPRESSION.
       /*  if (alumnos.length > 0)
            $form.the_list = alumnos;
        else
            $form.the_list = 'Please choose an option'; */

            $form.alumnos;
    }
} ]
);

app.controller('checkController', function($scope) {
    $scope.hide = false;
    $scope.checkboxClick = function() {
      $scope.hide = !$scope.hide;
    };

  });

  function showMe (box) {
        
    var chboxs = document.getElementsByName("c1");
    var vis = "none";
    for(var i in chboxs) { 
        if(chboxs[i].checked){
         vis = "block";
            break;
        }
    }
    document.getElementById(box).style.display = vis;


}