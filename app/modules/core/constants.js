(function () {
    'use strict';

    angular.module('app')
        .factory('CONSTANTS', Constants)
        .constant('URLS', {
            base: window.location.origin,
            imageUrl: window.location.origin + '/public/branding/images/logo_default.png',
            testData: window.location.origin + '/config/testData.json'
        })
        .constant('ERROR_EVENTS', {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            internal: 'internal-error',
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized',
            notAllowed: 'auth-not-allowed',
            notFound: 'not-found',
            timeout: 'request-timeout',
            badRequest: 'bad-request'
        });

    Constants.$inject = ['URLS', 'ERROR_EVENTS'];

    function Constants(URLS, ERROR_EVENTS) {
        return {
            urls: URLS,
            errorEvents: ERROR_EVENTS
        }
    }
})();