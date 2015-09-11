(function () {
    'use strict';

    angular.module('app.login')
        .controller('Logout', Logout);

    Logout.$inject = ['$filter', '$state', 'logger', 'authentication'];

    function Logout($filter, $state, logger, authentication) {
        authentication.logout()
            .then(function () {
                $state.go('loginTemplate.login');
                logger.success($filter('translate')('MESSAGES.LOGGEDOUT'));
            });
    }

})();
