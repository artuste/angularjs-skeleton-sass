(function () {
    'use strict';

    angular.module('app')
        .factory('ErrorLog', ErrorLog)
        .factory('ErrorInterceptor', ErrorInterceptor);

    ErrorLog.$inject = ['$rollbar'];
    ErrorInterceptor.$inject = ['$rootScope', '$q', 'ERROR_EVENTS'];

    function ErrorLog($rollbar) {
        return {
            error: error
        };

        function error() {
            return $rollbar.error
        }
    }

    function ErrorInterceptor($rootScope, $q, ERROR_EVENTS) {
        return {
            responseError: function (response) {
                $rootScope.$broadcast({
                    0: ERROR_EVENTS.timeout,
                    400: ERROR_EVENTS.badRequest,
                    401: ERROR_EVENTS.notAuthenticated,
                    404: ERROR_EVENTS.notFound,
                    405: ERROR_EVENTS.notAllowed,
                    500: ERROR_EVENTS.internal
                }[response.status], response);

                return $q.reject(response);
            }
        };
    }

})();