angular.module('product')
    .controller('detailProductController', detailProductController);
function detailProductController($scope,$stateParams,$filter,ProductService){
  var vm=this;
  console.log($stateParams.name);
  ProductService.returnProduct().then(successCallback, errorCallback);

  function successCallback(res) {
      vm.products = $filter('filter')(res.data, {name: $stateParams.name});
      vm.name = "fdsfdsfdsf";


      console.log(vm.products[0].name);
  }

  function errorCallback(err) {
      console.log("Error", err);
  }
}
