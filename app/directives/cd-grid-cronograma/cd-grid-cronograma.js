'use strict';

angular.module('cdApp',[])

.directive('cdGridCronograma',function(){
    return{
        restrict: 'E',
        scope:{
            data:'=data'
        },
        templateUrl : 'directives/cd-grid-cronograma/cd-grid-cronograma.html'
    }
});