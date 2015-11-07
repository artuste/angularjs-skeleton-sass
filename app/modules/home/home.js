(function () {
    'use strict';

    angular.module('app.home')
        .controller('homesController', homesController);

    homesController.$inject = ['$scope', '_', 'Offline', 'persistenceService'];

    function homesController($scope, _, Offline, persistenceService) {
        $scope.showList = false;

        var getData = function () {

            persistenceService.action.getAll().then(
                function (homes) {
                    $scope.homes = homes;
                    $scope.showList = true;
                    $scope.showEmptyListMessage = (homes.length === 0);
                },
                function (error) {
                    $scope.error = error;
                });
        };

        var lazyGetData = _.debounce(getData, 50);

        Offline.on('confirmed-down', lazyGetData);
        Offline.on('confirmed-up', lazyGetData);

        lazyGetData();

        $scope.delete = function (index) {

            var id = $scope.homes[index].id;

            persistenceService.action.delete(id).then(
                function (result) {
                    $scope.homes.splice(index, 1);
                },
                function (error) {
                    $scope.error = error;
                });
        };

    }

})();
