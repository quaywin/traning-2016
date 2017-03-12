
angular.module('login')
    .controller('LoginController', LoginController);

function LoginController($scope, $rootScope,$localStorage, UserService) {
    $rootScope.userLogout = function() {
        $rootScope.loginSuccess = false;
    }
    $scope.goRegister = function(){
      $rootScope.closeLogin.close();
    }
    $scope.submitForm = function(isValid) {

        if (isValid) {


              var users=$localStorage.user;
                var check = 0;
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];

                    if (user.username === $scope.username && user.password === $scope.password) {
                        check = 1;
                        $rootScope.loginSuccess = true;
                        $rootScope.username = user.username;
                        // $rootScope.modalInstance.close();
                        $rootScope.closeLogin.close();
                    }
                }
                if (check === 0) {
                    alert("Dang nhap that bai");
                }


            function errorCallback(err) {

                console.log("error", err)
            }

        } else {
            $scope.formLogin.username.$dirty = true;
            $scope.formLogin.password.$dirty = true;
        }
    }
}
