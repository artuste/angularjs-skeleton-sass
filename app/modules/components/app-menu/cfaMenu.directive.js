(function () {
    'use strict';

    angular.module('app')
        .directive('cfaMenu', cfaMenu);
    function cfaMenu() {
        return {
            restrict: 'EA',
            scope: {},
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: 'modules/components/app-menu/cfaMenu.html'
        };

        Controller.$inject = ['cfaMenuService'];


        function Controller(cfaMenuService) {
            var vm = this;

            vm.config = {};
            var jsonUrl = '/config/modulesList.json';

            cfaMenuService.getConfig(jsonUrl)
                .then(function (response) {
                    vm.config.modulesList = response.data;
                });
        }
    }
})();