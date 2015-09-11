(function () {
    'use strict';

    angular.module('skeleton')
        .config(['$httpProvider', '$rollbarProvider', 'toastrConfig', config]);

    function config($httpProvider, $rollbarProvider, toastrConfig) {
        errorInterceptorConfig();
        errorLogConfig();
        growlMessages();

        ////////////////


        function errorInterceptorConfig() {
            $httpProvider.interceptors.push([
                '$injector',
                function ($injector) {
                    return $injector.get('ErrorInterceptor');
                }
            ]);
        }

        function errorLogConfig() {
            $rollbarProvider.config.accessToken = '00c29aa300df48579bd1c118a7de5ad7';
            $rollbarProvider.config.captureUncaught = true;
            $rollbarProvider.config.payload = {
                environment: 'development'
            };
        }

        function growlMessages() {
            angular.extend(toastrConfig, {
                allowHtml: true,
                closeButton: false,
                closeHtml: '<button>&times;</button>',
                containerId: 'toast-container',
                extendedTimeOut: 1000,
                iconClasses: {
                    error: 'toast-error',
                    info: 'toast-info',
                    success: 'toast-success',
                    warning: 'toast-warning'
                },
                maxOpened: 0,
                messageClass: 'toast-message',
                newestOnTop: true,
                onHidden: null,
                onShown: null,
                positionClass: 'toast-bottom-right',
                preventDuplicates: false,
                tapToDismiss: true,
                target: 'body',
                timeOut: 5000,
                titleClass: 'toast-title',
                toastClass: 'toast'
            });
        }
    }

})();