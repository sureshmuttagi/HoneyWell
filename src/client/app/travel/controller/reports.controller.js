
(function () {
    'use strict';

    angular.module('app.travel')
        .controller('ReportController', ReportController);

        ReportController.$inject = ['$scope', '$rootScope', '$stateParams', '$state'];

    function ReportController($scope, $rootScope, $stateParams, $state) {
        console.log('Report controller  is loaded');
    }
})();
