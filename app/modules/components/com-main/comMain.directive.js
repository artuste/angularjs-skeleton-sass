(function () {
    'use strict';

    angular.module('skeleton')
        .directive('comMain', comMain);

    function comMain() {
        return {
            transclude: true,
            restrict: 'EA',
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: 'modules/components/com-main/comMain.html'
        };

        Controller.$inject = ['$scope', '$rootScope', 'ErrorLog', '$filter', 'logger', 'CONSTANTS', 'comMainService'];

        function Controller($scope, $rootScope, ErrorLog, $filter, logger, CONSTANTS, comMainService) {
            var vm = this;

            vm.config = {};
            vm.logo = selectLogo();

            activate();

            function activate() {
                getConfiguration();
                watchStylesChanges();
                httpErrorListeners();
            }

            function selectLogo() {
                var defaultLogo = CONSTANTS.urls.personalization.logo.defaultImage,
                    clientLogo = CONSTANTS.urls.personalization.logo.clientImage;

                return ($rootScope.clientStyleEnable) ? clientLogo : defaultLogo;
            }

            function getConfiguration() {
                comMainService.getConfig()
                    .then(function (response) {
                        vm.config.data = response.data;
                    });
            }

            function watchStylesChanges() {
                $scope.$watch('clientStyleEnable', function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        vm.logo = selectLogo();
                    }
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