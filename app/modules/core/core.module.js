(function () {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',

        /*
         * 3rd Party modules
         */
        'ui.router',
        'pascalprecht.translate',
        'toastr',
        'anotherpit/angular-rollbar',

        /*
         * Feature areas
         */
        'app.authentication',
        'app.login',
        'app.home'
    ]);

})();