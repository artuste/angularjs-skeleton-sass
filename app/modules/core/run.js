(function () {
    'use strict';

    angular.module('skeleton')
        .run(['$rootScope', '$state', 'webStorage', run]);

    function run($rootScope, $state) {
        $rootScope.$on("$stateChangeSuccess", function(userInfo) {
            console.log(userInfo);
        });

        $rootScope.$on("$stateChangeError", function(event, current, previous, eventObj) {
            $state.go('loginTemplate.login');
        });
    }

})();