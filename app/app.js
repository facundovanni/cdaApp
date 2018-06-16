'use strict';

// Declare app level module which depends on views, and components
angular.module('cdApp', [
  'ngRoute',
  'cdApp.cronograma',
  'cdApp.view2',
  'cdApp.version',
  'cdApp.cdGridCronograma'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/cronograma' });
  }]);
