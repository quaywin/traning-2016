angular.module('market')
    .config(marketConfig);

function marketConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');
};