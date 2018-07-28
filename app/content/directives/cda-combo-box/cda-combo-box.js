(function ComboBoxScope(angular) {
    'use strict';
    angular.module('cdApp.directives', [])
        .directive('cdaComboBox', function () {
            return {
                restrict: 'E',
                scope: {
                    data: '=',
                    label: '@',
                    ngModel: '=',
                    labelName: '@',
                    disabled: '='
                },
                templateUrl: 'content/directives/cda-combo-box/cda-combo-box.html'
            }
        });
})(angular);

