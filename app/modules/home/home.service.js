(function () {
    'use strict';

    angular.module('app.home')
        .factory('HomeData', HomeData);

    HomeData.$inject = ['$http', 'URLS'];

    function HomeData($http, URLS) {
        return {
            get: get
        };

        function get(url) {
            return $http.get(url);
        }
    }

})();
