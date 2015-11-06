(function () {
    'use strict';

    angular.module('app')
        .factory('cfaMainService', cfaMainService);

    cfaMainService.$inject = ['$http', 'URLS'];

    function cfaMainService($http, URLS) {
        return {
            getConfig: getConfig
        };

        function getConfig() {
            return $http.get(URLS.base + '/config/config.json');
        }
    }

})();