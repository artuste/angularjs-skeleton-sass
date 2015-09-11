(function () {
    'use strict';

    angular.module('skeleton')
        .controller('comLanguagesCtrl', comLanguagesCtrl);

    comLanguagesCtrl.$inject = ['$rootScope', '$scope', '$translate'];

    function comLanguagesCtrl($rootScope, $scope, $translate) {
        $rootScope.language = $translate.use();

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
            $rootScope.language = langKey;
        };
    }
})();