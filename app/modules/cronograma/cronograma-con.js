'use strict';
angular.module('cdApp.cronograma').controller('CronogramaController', ['$scope', function ($scope) {

  var that = this;

  that.data = [
    {
        firstName: "Cox",
        lastName: "Carney",
        company: "Enormo",
        employed: true
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Nancy",
        lastName: "Waters",
        company: "Fuelton",
        employed: false
    }
  ];
  that.grid = {
    enableSorting: true,
    columnDefs: [
      { field: 'firstName' },
      { field: 'lastName' },
      { field: 'company' },
      { field: 'employed', enableCellEdit: false }
    ],
    data: that.data
  };


  

}]);