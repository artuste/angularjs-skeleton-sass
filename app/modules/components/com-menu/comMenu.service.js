(function () {
    'use strict';

    angular.module('skeleton')
        .factory('comMenuService', comMenuService);

    comMenuService.$inject = ['$http', 'URLS'];

    function comMenuService($http, URLS) {
        return {
            getConfig: getConfig
        };

        function getConfig(path) {
            return $http.get(URLS.base + path);
        }
    }

})();