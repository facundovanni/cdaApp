'use strict';

angular.module('cdApp.directives', [])
    .directive('cdGrid', function () {
        return {
            restrict: 'E',
            scope: {
                columns: '=',
                data: '='
            },
            templateUrl: 'content/directives/cd-grid/cd-grid.html'
        }
    })
    .controller('cdGridController',function($scope){

        function transformArray(){
            var auxArray = $scope.data.slice();
            $scope.data.splice(0);
            auxArray.forEach(function(item){ 
                var itemArray = [];
                Object.keys(item).map(function(key, index) {
                    itemArray.push(item[key])
                });
                $scope.data.push(itemArray) 
            });
            console.log($scope.data);
        };
        transformArray();
    });