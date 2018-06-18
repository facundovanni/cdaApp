angular.module('demo', ['ngResource', 'ngMaterial', 'ngMessages']).controller('test', myAppController);

         function myAppController ($scope, $mdDialog) {
            $scope.status = '';
            var alert;
            $scope.showAlert = showAlertBox;
             
       			$scope.items = ["All","Programming","Tutorials"];
                  function showAlertBox() {
                    alert = $mdDialog.alert({
                      title: 'Dialog Box',
                      textContent: 'All Programming Tutorials!',
                      ok: 'Close'
                    });
                    $mdDialog
                      .show( alert )
                      .finally(function() {
                        alert = undefined;
                      });
                  }
			
			
            $scope.showConfirm = function(event) {
               var confirm = $mdDialog.confirm()
                  .title('Will you subscribe for All Programming Tutorials?')
                  .textContent('Please subscribe now for tutorials.')
                  .targetEvent(event)
                  .ok('Yes')
                  .cancel('No');
                  $mdDialog.show(confirm).then(function() {
                     $scope.status = 'Done!';
                     }, function() {
                        $scope.status = 'Please subscribe.';
                  });
            };
			
            $scope.showCustom = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true,           
                  template: '<md-dialog aria-label="List dialog">' +
                             '  <md-dialog-content>'+
                             '    <md-list>'+
                             '      <md-list-item ng-repeat="item in items">'+
                             '       <p>* <b>{{item}}</b></p>' +
                             '      '+
                             '    </md-list-item></md-list>'+
                             '  </md-dialog-content>' +
                             '  <md-dialog-actions>' +
                             '    <md-button ng-click="closeDialog()" class="md-primary">' +
                             '      Close' +
                             '    </md-button>' +
                             '  </md-dialog-actions>' +
                          '</md-dialog>',
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
         }