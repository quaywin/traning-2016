angular.module('product')
    .controller('ProductController', ProductController);

function ProductController($scope, $rootScope, $modal, ProductService) {
    $rootScope.showLogin = function() {
      if($rootScope.loginSuccess == false){
        $rootScope.closeLogin = $modal.open({
            templateUrl: "components/login/login.html"
        });}
    }

    $rootScope.showRegister = function() {
        $rootScope.closeRegiter = $modal.open({
            templateUrl: "components/register/register.html"
        })
    }
    ProductService.returnProduct().then(successCallback, errorCallback);

    function successCallback(res) {
        $scope.products = res.data;
        //console.log(res.data.products);
    }

    function errorCallback(err) {
        console.log("Error", err);
    }


}
