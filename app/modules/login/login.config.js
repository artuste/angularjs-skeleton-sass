(function () {
    'use strict';

    angular
        .module('app.login')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('loginTemplate.login', {
                url: "/login",
                templateUrl: 'modules/login/login.html',
                controller: 'Login',
                controllerAs: 'vm'
            })
            .state('loginTemplate.logout', {
                url: "/logout",
                controller: 'Logout'
            })
    }
})();