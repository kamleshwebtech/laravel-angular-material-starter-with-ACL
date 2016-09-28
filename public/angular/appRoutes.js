(function () {
    'use strict';

    angular.module('myApp')
            .config(['$stateProvider', '$urlRouterProvider', appRoutes]);
    function appRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
                // .state('/', {
                //     url: '/',
                //     templateUrl: base_url + 'angular/pages/home/view/content.html', 
                //     controller: 'HomeController', 
                //     controllerAs: 'home'
                // })
                .state('employee', {
                    url: '/employee',
                    templateUrl: base_url + 'angular/pages/employee/view/content.html',
                    controller: 'EmployeeController',
                    controllerAs: 'employee',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/employee/EmployeeController.js']
                            })
                        }
                    }
                })
                .state('about', {
                    url: '/about',
                    templateUrl: base_url + 'angular/pages/about/view/content.html',
                    controller: 'AboutController',
                    controllerAs: 'about',
                     resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/about/AboutService.js','./angular/pages/about/AboutController.js']
                            })
                        }
                    }
                })
                .state('credits', {
                    url: '/credits',
                    templateUrl: base_url + 'angular/pages/credits/view/content.html',
                    controller: 'CreditsController',
                    controllerAs: 'credits',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/credits/CreditsController.js']
                            })
                        }
                    }
                })
                .state('department', {
                    url: '/department',
                    templateUrl: base_url + 'angular/pages/department/view/content.html',
                    controller: 'DepartmentController',
                    controllerAs: 'department',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/department/DepartmentController.js']
                            })
                        }
                    }
                })
                .state('item', {
                    url: '/item',
                    templateUrl: base_url + 'angular/pages/item/view/content.html',
                    controller: 'ItemController',
                    controllerAs: 'item',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/item/ItemController.js']
                            })
                        }
                    }
                })
                .state('supplier', {
                    url: '/supplier',
                    templateUrl: base_url + 'angular/pages/supplier/view/content.html',
                    controller: 'SupplierController',
                    controllerAs: 'supplier',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/supplier/SupplierController.js']
                            })
                        }
                    }
                })
                .state('category', {
                    url: '/category',
                    templateUrl: base_url + 'angular/pages/category/view/content.html',
                    controller: 'CategoryController',
                    controllerAs: 'category',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/category/CategoryController.js']
                            })
                        }
                    }
                })
                .state('home', {
                    url: '/',
                    templateUrl: base_url + 'angular/pages/home/view/content.html',
                    controller: 'HomeController',
                    controllerAs: 'home',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'myApp',
                                files: ['./angular/pages/home/HomeController.js']
                            })
                        }
                    }
                })
                ;
    }
})();
