'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', [
    'ui.router',
    'ngStorage',
    'login',
    'register',
    'product',
    'ui.bootstrap',
    'service'

])
.run(function($rootScope){
  $rootScope.loginSuccess = false;
});

// phonecatApp.config(function($httpProvider) {
//     $httpProvider.interceptors.push('Interceptor');
// })
