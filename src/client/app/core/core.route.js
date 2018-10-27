(function () {
  'use strict';

  angular
    .module('app.core')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('404', {
      url: '/404',
      templateUrl: 'app/core/404.html',
    });
  }

})();
