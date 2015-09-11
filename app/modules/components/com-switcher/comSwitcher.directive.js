(function(){
    'use strict';

    angular.module('skeleton')
        .directive('comSwitcher', comSwitcher);
    function comSwitcher() {
        return {
            restrict: 'EA',
            scope: {},
            controller: Controller,
            templateUrl: 'modules/components/com-switcher/comSwitcher.html'
        };

        Controller.$inject = ['$scope', '$rootScope'];


        function Controller($scope, $rootScope) {
            $scope.config = {};

            $scope.stylesSwitcher = {
                labels : [
                    'BUTTONS.SWITCH_STYLES_CLIENT',
                    'BUTTONS.SWITCH_STYLES_DEFAULT'
                ],
                switch : stylesSwitcher
            };

            function stylesSwitcher(){
                if($scope.switchBtnLabel === $scope.stylesSwitcher.labels[0]){
                    $scope.switchBtnLabel = $scope.stylesSwitcher.labels[1];
                    $rootScope.clientStyleEnable = true;
                } else {
                    $scope.switchBtnLabel = $scope.stylesSwitcher.labels[0];
                    $rootScope.clientStyleEnable = false;
                }
            }

            $scope.switchBtnLabel = $scope.stylesSwitcher.labels[0];
        }
    }
})();