(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', '$state'];

  function ShellController($rootScope, $timeout, $state) {
    var vm = this;
    vm.busyMessage = 'WAITMESSAGE';
    vm.isBusy = true;
    $rootScope.showSplash = true;

    $rootScope.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    // vm.logoff = function (username) {
    //   AuthDataService.Logoff(username, $rootScope.globals.currentUser.authdata.tgtToken)
    //     .then(function () {
    //       $state.go('LOGIN');
    //     });
    // };

    activate();

    function activate() {
   
      hideSplash();
    }

    function hideSplash() {
      //Force a 1 second delay so we can see the splash.
      $timeout(function () {
        $rootScope.showSplash = false;
      }, 1000);
    }

    vm.$state = $state;

  }
})();
