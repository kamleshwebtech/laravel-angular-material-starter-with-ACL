(function(){
  'use strict';

  angular.module('department')
         .config(['$stateProvider', '$urlRouterProvider', DepartmentRoutes]);

function DepartmentRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('department', {
            url: '/department',
            templateUrl: base_url + 'angular/pages/department/view/content.html', 
            controller: 'DepartmentController', 
            controllerAs: 'department'
        });
        
}
})();
