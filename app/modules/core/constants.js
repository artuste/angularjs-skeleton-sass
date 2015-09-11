(function () {
    'use strict';

    angular.module('skeleton')
        .factory('CONSTANTS', Constants)
        .constant('URLS', {
            base: window.location.origin,
            login: {
              url: window.location.origin + '/modules/authentication/mockToken.json'
            },
            personalization: {
                imagesUrl: window.location.origin + '/public/branding/images/',
                logo: {
                    defaultImage: 'logo_default.png',
                    clientImage: 'logo_client.png'
                }
            },
            books: window.location.origin + '/config/ebooks.json',
            vanilia: {
                serverName: window.location.origin + '/public/vanilia-player/dist/player.html'
            }
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