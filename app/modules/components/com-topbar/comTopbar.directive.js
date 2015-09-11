(function(){
    'use strict';

    angular.module('skeleton')
        .directive('comTopbar', comTopbar);

    function comTopbar() {
        return {
            restrict: 'EA',
            scope: {
                config: '=',
                lang: '=',
                urlLogo: '='
            },
            controller: Controller,
            templateUrl: 'modules/components/com-topbar/comTopbar.html'
        };

        Controller.$inject = ['$scope', 'URLS'];

        function Controller($scope, URLS) {
            $scope.config = {};
            $scope.imgUrl = URLS.personalization.imagesUrl + $scope.urlLogo;

            $scope.$watch('urlLogo', function (newValue, oldValue) {
                if(newValue !== oldValue) {
                    $scope.imgUrl = URLS.personalization.imagesUrl + newValue;
                }
            });

            $scope.$watch('config', function (newValue, oldValue) {
                if(newValue !== oldValue) {
                    $scope.config = newValue;
                }
            });
        }
    }
})();