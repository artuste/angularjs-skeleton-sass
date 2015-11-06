(function () {
    'use strict';

    window.indexedDB = window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
        window.webkitIDBTransaction ||
        window.msIDBTransaction;

    window.IDBKeyRange = window.IDBKeyRange ||
        window.webkitIDBKeyRange ||
        window.msIDBKeyRange;

    angular
        .module('app')
        .config([
            '$provide',
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            '$translateProvider',
            config
        ]);


    ////////////////


    function config($provide, $stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
        routing();
        translations();
        offline();

        /////////////////

        function offline() {
            $provide.constant('indexedDB', window.indexedDB);
            $provide.constant('_', window._);
            $provide.constant('localStorage', window.localStorage);
            $provide.constant('Offline', window.Offline);
        }

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