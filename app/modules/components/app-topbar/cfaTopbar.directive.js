(function(){
    'use strict';

    angular.module('app')
        .directive('cfaTopbar', cfaTopbar);

    function cfaTopbar() {
        return {
            restrict: 'EA',
            scope: {
                config: '=',
                lang: '=',
                urlLogo: '='
            },
            controller: Controller,
            templateUrl: 'modules/components/app-topbar/cfaTopbar.html'
        };

        Controller.$inject = ['$scope', 'URLS'];

        function Controller($scope, URLS) {
            $scope.config = {};
            $scope.imgUrl = URLS.imageUrl;

            $scope.$watch('config', function (newValue, oldValue) {
                if(newValue !== oldValue) {
                    $scope.config = newValue;
                }
            });
        }
    }
})();