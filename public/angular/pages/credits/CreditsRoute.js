(function(){
  'use strict';

  angular.module('credits')
         .config(['$stateProvider', '$urlRouterProvider', CreditsRoute]);

function CreditsRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('credits', {
            url: '/credits',
            templateUrl: base_url + 'angular/pages/credits/view/content.html', 
            controller: 'CreditsController', 
            controllerAs: 'credits'
        });
        
}
})();
