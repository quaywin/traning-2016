angular.module('marketDetail')
    .config(marketDetailConfig);

function marketDetailConfig($stateProvider) {
    $stateProvider
        .state('store.detail', {
            url: '/:id',
            templateUrl: 'market/components/market-detail/market-detail.html',
            controller: marketDetailController
        })
};