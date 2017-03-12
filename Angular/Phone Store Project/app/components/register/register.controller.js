angular.module('register')
    .controller('RegisterController', RegisterController);

function RegisterController($scope, $rootScope,$localStorage, $filter, UserService) {

    $rootScope.userLogout = function() {
        $rootScope.loginSuccess = false;
    }

    // $scope.submitForm=submitForm;
    $scope.success = false;
    $scope.submitForm = function(isValid) {
        if (isValid) {
            UserService.autoComplete().then(successCallback, errorCallback);

            function successCallback(res) {
                var users = $localStorage.user;
                var check = 0;

                for (var i = 0; i < users.length; i++) {
                    var user = users[i];

                    if (user.username === $scope.email) {
                        check = 1;
                        break;
                    }
                }
                if (check === 1) {
                    alert("Email da ton tai");
                } else {
                  $localStorage.user.push({username:$scope.email,password:$scope.password});
                  console.log($localStorage.user);
                    $rootScope.closeRegiter.close();
                }
            }

            function errorCallback(err) {
                console.log("err:" + err);
            }
        } else {
            $scope.form.email.$dirty = true;
            $scope.form.username.$dirty = true;
            $scope.form.password.$dirty = true;
        }

    }
}
