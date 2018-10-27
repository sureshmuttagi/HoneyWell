

(function () {
    'use strict';

    angular.module('app.travel')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$rootScope', '$stateParams', '$state', '$mdDialog'];

    function UserController($scope, $rootScope, $stateParams, $state, $mdDialog) {
        var vm = this;
        vm.createUser = function (user) {
            console.log();
        };

        vm.closeDialog = function () {
            $mdDialog.cancel();
        };

    }
})();
