angular.module('marketMain')
    .controller('marketMainController');

function marketMainController($scope, $http) {
    $scope.type = '';
    $http.get('market/components/cameras/cameras.json').then(function(response) {
        $scope.cameras = response.data;
    });
    $scope.selectType = selectType;

    function selectType(type) {
        $scope.type = type;
    }
}