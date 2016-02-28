(function() {
  'use strict';

  angular
    .module('ui')
    .controller('home', HomeController);

  /** @ngInject */
  function HomeController($rootScope, $scope, $http, $location, $route) {

    $scope.tab = function(route) {
      return $route.current && route === $route.current.controller;
    };

    $http.get('me').success(function(data) {
      if (data.id || data.name) {
        $rootScope.user = data.email;
        $rootScope.authenticated = true;
        console.log($rootScope.user);
        console.log(data);
      } else {
        $rootScope.user = "N/A";
        $rootScope.authenticated = false;
        console.log($rootScope.user);
      }
    }).error(function() {
      $rootScope.user = "N/A";
      $rootScope.authenticated = false;
      console.log($rootScope.user);
    });

    $scope.logout = function() {
      $http.post('logout', {}).success(function() {
        $rootScope.authenticated = false;
        $location.path("/");
      }).error(function(data) {
        console.log("Logout failed")
        $rootScope.authenticated = false;
      });
    };

  }
})();
