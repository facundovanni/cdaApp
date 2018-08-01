(function AuthenticationScope(angular) {
  'use strict';
  angular.module('cdApp').service('authService', ['$state', 'angularAuth0', 'authManager', 
  function authService ($state, angularAuth0, authManager) {
    function login(username, password) {
      angularAuth0.authorize();
    }
    
    function handleParseHash() {
      angularAuth0.parseHash(
        { _idTokenVerification: false },
        function(err, authResult) {
        if (err) {
          console.log(err);
        }
        if (authResult && authResult.idToken) {
          setUser(authResult);
        }
      });
    }

    function logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
    }

    function setUser(authResult) {
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
    }

    function isAuthenticated() {
      return authManager.isAuthenticated();
    }

    return {
      login: login,
      handleParseHash: handleParseHash,
      logout: logout,
      isAuthenticated: isAuthenticated
    }
  }]);
})(angular);
