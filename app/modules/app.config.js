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

        //TODO: uncomment !!!!!!
        //routing();
        //translations();

        offline();

        /////////////////

        function offline() {
            $provide.constant('indexedDB', window.indexedDB);
            $provide.constant('_', window._);
            $provide.constant('localStorage', window.localStorage);
            $provide.constant('Offline', window.Offline);
            $provide.value('nullHome', {
                id: '',
                insertDate: new Date(-864000000000000),
                modifiedDate: new Date(-864000000000000)
            });

            $provide.value('dbModel', {
                name: 'codedhomes',
                version: '1',
                instance: null,
                objStoreName: 'homes',
                keyName: 'id',
                upgrade: function (e) {
                    var db = e.target.result;

                    if (!db.objectStoreNames.contains('homes')) {
                        db.createObjectStore('homes', {
                            keyPath: 'id'
                        })
                    }
                }
            });
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
                    prefix: 'locale-',
                    suffix: '.json'
                })
                .preferredLanguage('en');
        }
    }

})();