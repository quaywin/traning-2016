angular.module("marketDetail")
    .controller("marketDetailController", marketDetailController);

function marketDetailController($scope, $http, $stateParams) {
    $scope.setPreview = function(imgUrl) {
        $scope.imgPreview = imgUrl;
    };
    $http.get('market/components/cameras/' + $stateParams.id + '.json').then(function(response) {
        $scope.camera = response.data;
        $scope.imgPreview = $scope.camera.images[0];
    });

}