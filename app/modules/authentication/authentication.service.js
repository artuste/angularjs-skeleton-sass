(function () {
    'use strict';

    angular.module('app.authentication')
        .factory('authentication', authentication);

    authentication.$inject = ['$http', '$q', 'webStorage', 'CONSTANTS'];

    function authentication($http, $q, webStorage, CONSTANTS) {
        return {
            getUserInfo: getUserInfo,
            login: login,
            logout: logout
        };

        function getUserInfo() {
            return webStorage.get();
        }

        function login(credentials) {
            var userInfo;
            var loginApiUrl = CONSTANTS.urls.login.url;
            var deferred = $q.defer();

            // TODO: Should be $http.post
            // TODO: Delete mocked JSON url
            $http.get(loginApiUrl, {
                userName: credentials.userName,
                password: credentials.password
            }).then(function (result) {
                userInfo = {
                    accessToken: result.data.access_token,
                    userName: result.data.userName
                };
                webStorage.set(JSON.stringify(userInfo));

                deferred.resolve(userInfo);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }


        function logout() {
            var deferred = $q.defer();

            webStorage.remove();

            deferred.resolve(true);

            // TODO: Use it when backend will be ready
            //$http({
            //    method: "POST",
            //    url: logoutUrl,
            //    headers: {
            //        "access_token": userInfo.accessToken
            //    }
            //}).then(function(result) {
            // webStorage.remove();
            //    userInfo = null;
            //    deferred.resolve(result);
            //}, function(error) {
            //    deferred.reject(error);
            //});

            return deferred.promise;
        }
    }

})();
