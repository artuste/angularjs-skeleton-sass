(function () {
    'use strict';

    angular
        .module('app')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            '$translateProvider',
            config
        ]);


    ////////////////


    function config($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
        routing();
        translations();

        /////////////////

        function routing() {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state('main', {
                    abstract: true,
                    templateUrl: 'views/main.html'
                });

            $locationProvider.html5Mode(true);
        }

        function translations() {
            $translateProvider
                .useStaticFilesLoader({
                    prefix: 'i18n/locale-',
                    suffix: '.json'
                })
                .preferredLanguage('en');
        }
    }

})();