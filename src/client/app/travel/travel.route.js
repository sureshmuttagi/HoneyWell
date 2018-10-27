(function () {
    'use strict';

    angular
        .module('app.travel')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
        $stateProvider
            .state('LANDING', {
                url: '/landing',
                templateUrl: 'app/travel/templates/landing.html',
                controller: 'LandingController',
                controllerAs: 'landingCtrl'
            })
            .state('REPORT', {
                url: '/report',
                templateUrl: 'app/travel/templates/report.html',
                controller: 'ReportController',
                controllerAs: 'reportCtrl'
            });
    }
})();
