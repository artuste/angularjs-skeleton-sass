(function () {
    'use strict';

    angular.module('app.home')
        .controller('Home', Home);

    Home.$inject = ['URLS', 'HomeData', 'logger'];

    function Home(URLS, HomeData, logger) {
        var vm = this;

        vm.getSuccessRequest = getSuccessRequest;
        vm.getBadRequest = getBadRequest;


        /////////////////

        function getSuccessRequest() {
            HomeData.get(URLS.testData)
                .then(function (response) {
                    logger.success('Success!', response.data);
                });
        }

        function getBadRequest() {
            HomeData.get('/notExistData.json')
                .then(function (response) {
                }, function (error) {
                    console.log('error', error);
                });
        }
    }

})();
