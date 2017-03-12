angular.module('phonecatApp')
    .config(HomeConfig);

function HomeConfig($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            template: "<product-info product-obj='product' ng-repeat='product in products'></product-info>"

        })
        .state('productManu',{
          url:'/productManu/:manufacturer',
          template:"<product-info product-obj='product' ng-repeat='product in products'></product-info>",
          controller:'ProductManuController'
        })
        .state('detailProduct',{
          url:'/detailProduct/:name',
          templateUrl:"./components/product/detailProduct.html",
          controller:"detailProductController",
          controllerAs:"vm"
        })
}
