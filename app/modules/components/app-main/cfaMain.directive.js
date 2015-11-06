(function () {
    'use strict';

    angular
        .module('app')
        .directive('cfaMain', cfaMain);

    function cfaMain() {
        return {
            transclude: true,
            restrict: 'EA',
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: 'modules/components/app-main/cfaMain.html'
        };

        Controller.$inject = ['$scope', '$rootScope', 'ErrorLog', '$filter', 'logger', 'CONSTANTS', 'cfaMainService'];

        function Controller($scope, $rootScope, ErrorLog, $filter, logger, CONSTANTS, cfaMainService) {
            var vm = this;

            vm.config = {};

            activate();

            function activate() {
                getConfiguration();
                httpErrorListeners();
            }

            function getConfiguration() {
                cfaMainService.getConfig()
                    .then(function (response) {
                        vm.config.data = response.data;
                    });
            }

            function httpErrorListeners() {
                // 404
                $rootScope.$on(CONSTANTS.errorEvents.notFound, function (name, listener) {
                    var errorTitle = $filter('translate')('ERRORS.' + listener.status),
                        errorDesc = listener.data;

                    ErrorLog.error(errorDesc);
                    logger.error(errorDesc, errorTitle);
                });
            }
        }
    }
})();