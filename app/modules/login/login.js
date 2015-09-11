(function () {
    'use strict';

    angular.module('app.login')
        .controller('Login', Login);

    Login.$inject = ['$filter', '$state', 'logger', 'authentication'];

    function Login($filter, $state, logger, authentication) {
        var vm = this;

        vm.loginForm = {
            username: '',
            password: ''
        };

        vm.logIn = logIn;

        function logIn() {
            var credentials = vm.loginForm;

            authentication.login(credentials)
                .then(function () {
                    $state.go('main.home');
                    logger.success($filter('translate')('MESSAGES.LOGGEDIN'));
                });
        }
    }

})();
