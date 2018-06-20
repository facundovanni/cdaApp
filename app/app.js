'use strict';

// Declare app level module which depends on views, and components
angular.module('cdApp', [
  'ngRoute',
  'ngMaterial',
  'cdApp.view2',
  'cdApp.alumno'
  
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/cronograma' });
  }]);
