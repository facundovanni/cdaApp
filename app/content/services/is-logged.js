(function IsLoggedScope(angular) {
    'use strict';

    angular.module('cdApp.services').service('isLogged',
        ['authService',
            function (authService) {
                return function isLogged(){
                    return authService.isAuthenticated();
                } 
            }
        ]);
})(angular)