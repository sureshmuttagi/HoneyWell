
(function () {
    'use strict';

    angular.module('app.travel')
        .controller('LandingController', LandingController);

        LandingController.$inject = ['$scope', '$rootScope', '$stateParams', '$state'];

    function LandingController($scope, $rootScope, $stateParams, $state) {
        console.log('controller is loaded');
    }
})();
