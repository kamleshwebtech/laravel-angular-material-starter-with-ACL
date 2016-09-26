(function(){
  'use strict';

  angular.module('home')
         .config(['$stateProvider', '$urlRouterProvider', HomeRoutes]);

function HomeRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: base_url + 'angular/pages/home/view/content.html', 
            controller: 'HomeController', 
            controllerAs: 'home'
        });
        
}
})();
