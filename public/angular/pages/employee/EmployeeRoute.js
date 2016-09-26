(function(){
  'use strict';

  angular.module('employee')
         .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', EmployeeRoutes]);

function EmployeeRoutes($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('employee', {
            url: '/employee',
            templateUrl: base_url + 'angular/pages/employee/view/content.html', 
            controller: 'EmployeeController', 
            controllerAs: 'employee',
            // resolve: {
            //                     // load: function ($ocLazyLoad) {
            //                     //     return $ocLazyLoad.load({
            //                     //         name: 'myApp',
            //                     //         files: ['./angular/pages/employee/Employee.js',
            //                     //         './angular/pages/employee/EmployeeController.js']
            //                     //     });
            //                     // }
            //                     loadMyFile: function ($ocLazyLoad) {
            //                         return $ocLazyLoad.load({
            //                             name: 'chart.js',
            //                             files: [
            //                                 './angular/pages/employee/EmployeeController.js',
            //                                 // 'bower_components/angular-chart.js/dist/angular-chart.css'
            //                             ]
            //                         }),
            //                                 $ocLazyLoad.load({
            //                                     name: 'myApp',
            //                                     files: ['./angular/pages/employee/EmployeeController.js']
            //                                 })
            //                     }
            //                 }
        });
        
}
})();
