(function () {
    'use strict';

    angular.module('app')
        .factory('cfaMenuService', cfaMenuService);

    cfaMenuService.$inject = ['$http', 'URLS'];

    function cfaMenuService($http, URLS) {
        return {
            getConfig: getConfig
        };

        function getConfig(path) {
            return $http.get(URLS.base + path);
        }
    }

})();