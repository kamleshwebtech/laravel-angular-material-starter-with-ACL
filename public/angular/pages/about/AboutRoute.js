(function(){
  'use strict';

  angular.module('about')
         .config(['$stateProvider', '$urlRouterProvider', AboutRoutes]);
function AboutRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: base_url + 'angular/pages/about/view/content.html', 
            controller: 'AboutController', 
            controllerAs: 'about'
        });
        
}
  // function AboutRoutes($routeProvider, $locationProvider, $q){
  //   $routeProvider
  //     .when('/about', {
  //       templateUrl: base_url + 'angular/pages/about/view/content.html',
  //       controller: 'AboutController',
  //       controllerAs: 'about'
  //     })
  //     .when('/', {
  //       templateUrl: base_url + 'angular/pages/about/view/content.html',
  //       controller: 'AboutController',
  //       controllerAs: 'about'
  //     });
  // }

})();
