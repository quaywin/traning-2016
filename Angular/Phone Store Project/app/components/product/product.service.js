angular.module('product')
    .factory('ProductService', ProductService);

function ProductService($http, $q) {
    return {
        returnProduct: returnProduct
    }

    function returnProduct() {
        var deferred = $q.defer();
        $http.get("./data/product.json").then(function(response) {
            deferred.resolve(response);
        }, function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }
}
