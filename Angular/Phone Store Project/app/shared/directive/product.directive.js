angular.module('product').directive('productInfo', function() {
    return {
        restrict: 'E',
        scope: {
            product: '=productObj'
        },
        templateUrl: './shared/directive/productDirective.html'
    }
})
