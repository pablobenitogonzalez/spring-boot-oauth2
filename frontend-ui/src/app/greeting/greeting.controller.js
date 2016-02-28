(function() {
  'use strict';

  angular
    .module('ui')
    .controller('greeting', GreetingController);

  /** @ngInject */
  function GreetingController($scope, $http) {
    $http.get('resource/greeting').success(function(data) {
      $scope.greeting = data;
    })
  }
})();
