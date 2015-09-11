(function () {
    'use strict';

    angular
        .module('skeleton')
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
                .otherwise('/login');

            $stateProvider
                .state('main', {
                    abstract: true,
                    templateUrl: 'views/main.html',
                    resolve: {
                        auth: ["$q", "authentication", function ($q, authentication) {
                            var userInfo = authentication.getUserInfo();
                            if (userInfo) {
                                return $q.when(userInfo);
                            } else {
                                return $q.reject();
                            }
                        }]
                    }
                })
                .state('loginTemplate', {
                    abstract: true,
                    templateUrl: 'views/login.html'
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