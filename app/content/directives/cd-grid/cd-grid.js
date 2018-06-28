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
    });
    