(function() {
  'use strict';

  angular
    .module('ui')
    .config(routeConfig);

  function routeConfig($routeProvider, $httpProvider) {

    $routeProvider.when('/', {
      templateUrl : 'app/greeting/greeting.html',
      controller : 'greeting'
    }).otherwise('/');

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  }

})();
