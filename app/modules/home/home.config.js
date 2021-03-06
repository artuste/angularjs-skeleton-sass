(function () {
    'use strict';

    angular
        .module('skeleton')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider
            .state('main.home', {
                url: "/home",
                controller: 'Home',
                controllerAs: 'vm',
                templateUrl: 'modules/home/home.html'
            });
    }
})();