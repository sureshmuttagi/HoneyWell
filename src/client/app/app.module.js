
(function () {
    'use strict';

    angular.module('traveller', [
        'app.core',
        'app.layout',
        'app.travel'
    ])
        .run(['$rootScope', '$http', '$state', function ($rootScope, $http, $state) {

            $rootScope.globals = {
                currentUser: {
                    username: 'test',
                    stToken: 'honeywelltestcompitetion'
                }
            };
            $http.defaults.headers.common['st_token'] = 'honeywelltestcompitetion';
            $state.go('LANDING');

        }]);

})();
