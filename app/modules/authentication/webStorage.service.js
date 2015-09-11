(function () {
    'use strict';

    angular.module('app.authentication')
        .factory('webStorage', webStorage);

    webStorage.$inject = ['$window'];

    function webStorage($window) {
        return {
            set: set,
            get: get,
            remove: remove
        };

        function set(data) {
            $window.sessionStorage['userInfo'] = data;
        }

        function get() {
            return $window.sessionStorage['userInfo'];
        }

        function remove() {
            delete($window.sessionStorage['userInfo']);
        }
    }

})();
