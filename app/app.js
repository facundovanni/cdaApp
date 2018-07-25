'use strict';

// Declare app level module which depends on views, and components
angular.module('cdApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ngTouch',
  'ui.grid',
  'ui.router',
  'ui.bootstrap',
  'angularSpinner',
  'cdApp.services',
  'cdApp.alumno',
  'cdApp.materia',
  'cdApp.cronograma'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/cronograma/index' });
  }]);
