(function () {
    'use strict';

    angular
        .module('skeleton')
        .directive('comLanguages', comLanguages);

    function comLanguages() {
        return {
            restrict: 'AE',
            scope: {
                config: '=',
                lang: '='
            },
            templateUrl: 'modules/components/com-languages/comLanguages.html'
        };
    }

})();