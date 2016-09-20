(function() {
  'use strict';

  angular
    .module('angularPortfolio')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/routes/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'app/routes/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
      .when('/contact', {
        templateUrl: 'app/routes/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
