(function () {
    'use strict';

    angular.module('skeleton')
        .directive('comMenu', comMenu);
    function comMenu() {
        return {
            restrict: 'EA',
            scope: {},
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: 'modules/components/com-menu/comMenu.html'
        };

        Controller.$inject = ['comMenuService'];


        function Controller(comMenuService) {
            var vm = this;

            vm.config = {};
            var jsonUrl = '/config/modulesList.json';

            comMenuService.getConfig(jsonUrl)
                .then(function (response) {
                    vm.config.modulesList = response.data;
                });
        }
    }
})();