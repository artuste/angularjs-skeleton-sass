(function () {
    'use strict';

    angular.module('skeleton')
        .factory('comMainService', comMainService);

    comMainService.$inject = ['$http', 'URLS'];

    function comMainService($http, URLS) {
        return {
            getConfig: getConfig
        };

        function getConfig() {
            return $http.get(URLS.base + '/config/config.json');
        }
    }

})();