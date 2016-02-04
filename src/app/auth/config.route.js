(function () {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'src/app/auth/register.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'src/app/auth/login.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      });
  }

})();