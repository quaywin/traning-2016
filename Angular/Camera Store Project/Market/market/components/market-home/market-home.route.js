angular.module('marketHome')
    .config(marketHomeConfig);

function marketHomeConfig($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'market/components/market-home/market-home.html'
        })
};