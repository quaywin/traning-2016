angular.module('marketMain')
    .config(marketMainConfig);

function marketMainConfig($stateProvider) {
    $stateProvider
        .state('store', {
            url: '/store',
            templateUrl: 'market/components/market-main/market-main.html',
            controller: marketMainController
        })
};