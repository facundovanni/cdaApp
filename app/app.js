'use strict';

// Declare app level module which depends on views, and components
angular.module('cdApp', [
  'ngRoute',
  'ngMaterial',
  'cdApp.view2',
  'cdApp.alumno',
  'cdApp.cronograma',
  'cdApp.directives'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/cronograma/index' });
  }]);
