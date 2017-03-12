angular.module('product')
    .controller('ProductManuController', ProductManuController);
function ProductManuController($scope,$stateParams,$filter,ProductService){
  console.log($stateParams.manufacturer);
  ProductService.returnProduct().then(successCallback, errorCallback);

  function successCallback(res) {
      $scope.products = $filter('filter')(res.data, {manufacturer: $stateParams.manufacturer});
      console.log(res.data);
  }

  function errorCallback(err) {
      console.log("Error", err);
  }
}
