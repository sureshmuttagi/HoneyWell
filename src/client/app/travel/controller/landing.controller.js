
(function () {
    'use strict';

    angular.module('app.travel')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['$scope', '$rootScope', '$stateParams', '$state', 'dialogService','$mdDialog'];

    function LandingController($scope, $rootScope, $stateParams, $state, dialogService, $mdDialog) {
        console.log('controller is loaded');
        var vm = this;
        vm.groups = function () {
            return ['Test', 'check', 'works'];
        };


        vm.createUser = function ($event) {
            dialogService.customDialog($event, {
                controller: 'UserController',
                controllerAs: 'userCtrl',
                templateUrl: 'app/travel/templates/createUser.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: false,
                preserveScope: true,
                scope: $scope,
                bindToController: true,
                fullScreen: true
            }).then(function (res) {
                console.log('closed');
            });
        };

     
    }
})();
