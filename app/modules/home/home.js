(function () {
    'use strict';

    angular.module('app.home')
        .controller('Home', Home);

    Home.$inject = ['URLS', 'HomeData', 'logger'];

    function Home(URLS, HomeData, logger) {
        var vm = this;

        vm.books = [];
        vm.getSuccessRequest = getSuccessRequest;
        vm.getBadRequest = getBadRequest;


        /////////////////

        function getSuccessRequest() {
            HomeData.get(URLS.books)
                .then(function (response) {
                    vm.books = response.data.ebooks.ebook;

                    logger.success('Success!');
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
