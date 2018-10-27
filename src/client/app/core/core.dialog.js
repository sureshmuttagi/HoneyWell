(function () {

    'use strict';

    angular.module('app.core')
        .factory('dialogService', dialogService)
        .controller('DialogController', DialogController);

    DialogController.$inject = ['$mdDialog', 'dialogViewModel'];
    function DialogController($mdDialog, dialogViewModel) {
        var vm = this;
        vm.dialogViewModel = dialogViewModel;

        vm.hide = function () {
            $mdDialog.hide();
        };

        vm.cancel = function () {
            $mdDialog.cancel();
        };

        vm.answer = function (data) {
            $mdDialog.hide(data);
        };
    }

    dialogService.$inject = ['$mdDialog', '$mdMedia'];
    function dialogService($mdDialog, $mdMedia) {

        var defaults = {
            title: ' Alert title goes here',
            content: 'Description goes here',
            ariaLabel: 'Alert demo',
            okLabel: 'OK',
            clickOutsideToClose: true,
            cancelLabel: 'Cancel'
        };

        var customDefaults = {
            controller: 'DialogController',
            templateUrl: 'app/core/dialog.html',
            clickOutsideToClose: true
        };

        //var fullScreen = $mdMedia('xs') || $mdMedia('sm');

        var service = {};
        service.alert = alert;
        service.confirm = confirm;
        service.customDialog = customDialog;
        return service;

        function alert(ev, customOptions) {

            var tempDefaults = {};
            angular.extend(tempDefaults, defaults, customOptions);

            var alertDialog = $mdDialog.alert()
                .parent(angular.element(document.body))
                .clickOutsideToClose(tempDefaults.clickOutsideToClose)
                .title(tempDefaults.title)
                .textContent(tempDefaults.content)
                .ariaLabel(tempDefaults.ariaLabel)
                .ok(tempDefaults.okLabel)
                .targetEvent(ev)
                .multiple(tempDefaults.multiple);

            return $mdDialog.show(alertDialog);
        }

        function confirm(ev, customOptions) {

            var tempDefaults = {};
            angular.extend(tempDefaults, defaults, customOptions);

            var confirmDialog = $mdDialog.confirm()
                .cancel(tempDefaults.cancelLabel || 'Cancel')
                .parent(angular.element(document.body))
                .clickOutsideToClose(tempDefaults.clickOutsideToClose)
                .title(tempDefaults.title)
                .textContent(tempDefaults.content)
                .ariaLabel(tempDefaults.ariaLabel)
                .ok(tempDefaults.okLabel)
                .targetEvent(ev)
                .multiple(tempDefaults.multiple);

            return $mdDialog.show(confirmDialog);

        }

        function customDialog(ev, customOptions) {

            var tempDefaults = {};
            angular.extend(tempDefaults, customDefaults, customOptions);
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
            var dialog = {
                controller: tempDefaults.controller,
                controllerAs: tempDefaults.controllerAs || 'vm',
                templateUrl: tempDefaults.templateUrl,
                parent: angular.element(document.body),
                targetEvent: ev,
                multiple: tempDefaults.multiple,
                clickOutsideToClose: tempDefaults.clickOutsideToClose,
                fullscreen: tempDefaults.fullScreen || useFullScreen,
                locals: tempDefaults.locals || {},
                resolve: tempDefaults.resolve || {},
                onShowing: tempDefaults.onShowing,
                escapeToClose: false
            };
            //Fix : Setting undefind in scope of dialog throws error
            if (tempDefaults.scope) {
                dialog.scope = tempDefaults.scope;
            }
            if (tempDefaults.preserveScope) {
                dialog.preserveScope = tempDefaults.preserveScope;
            }

            return $mdDialog.show(dialog);
        }

    }
})();
