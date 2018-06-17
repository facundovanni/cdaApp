// tag::module[]
var app = angular.module('demo', ['ngResource']);
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