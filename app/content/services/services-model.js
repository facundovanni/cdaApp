(function ServicesModelScope(angular) {
    'use strict';
  
    angular.module('cdApp.services',[])
        .service('ServicesModel', ServicesModel);
  
    ServicesModel.$inject = ['$resource'];
  
    function ServicesModel($resource) {
      this.create = function create(url, customParams, customActions) {
        var actions = angular.extend({
          get: {
            method: 'GET'
          },
          update: {
            method: 'PUT'
          },
          query: {
            method: 'GET',
            isArray: true
          },
          save: {
            method: 'POST'
          },
          remove: {
            method: 'DELETE'
          }
        }, customActions);
  
        var params = angular.extend({}, customParams);
        var resource = $resource(url, params, actions);
  
        resource.getById = function getById(id) {
          return resource.get({
            id: id
          });
        };
  
        return resource;
      };
    }
  })(window.angular);
  