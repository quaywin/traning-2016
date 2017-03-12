var myApp = angular.module('myApp', ['ui.router']);

myApp.controller('MyController', function($scope){
    //Login
    // $scope.username = "user";
    // $scope.password = "123";
    $scope.sayHello = function() {
        var username = $scope.username;
        var password = $scope.password;
        // console.log("username: " + username);
        // console.log("password: " + password);
        if (username != 'user' || password != '123'){
            alert( 'Sorry Username or Password not true!');}
        else {
            $scope.greeting =' Hello '+ username;
        }
  };
    //Register
    $scope.success=false;
    $scope.register = function(){
        $scope.success=true;
    };
});

myApp.directive('passwordMatch', [function () {
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem , attrs,control) {
        var checker = function () {
            //lấy giá trị của trường mật khẩu
            var e1 = scope.$eval(attrs.ngModel);
            //lấy giá trị của xác nhận mật khẩu
            var e2 = scope.$eval(attrs.passwordMatch);
            return e1 == e2;
        };
        scope.$watch(checker, function (n) {
            //thiết lập form control
            control.$setValidity("unique", n);
        });
        }
    };
}]);

// myApp.directive("ngFormlogin", function(){
//     return {
//         templateUrl: '../myproject/app/templates/login_form.html'
//     };
// });

  myApp.config(function($stateProvider) {
    var registerState = {
        name: 'register',
        url: '/register',
        templateUrl: '../myproject/app/templates/register_form.html'
    }

    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: '../myproject/app/templates/login_form.html'
    }

    // var homeState ={
    //     name: 'submit',
    //     url: '/home',
    //     templateUrl: '../myproject/app/templates/home.html'
    // }

    $stateProvider.state(registerState);
    $stateProvider.state(loginState);
});