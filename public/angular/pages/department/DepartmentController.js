(function(){
  'use strict';

  // Prepare the 'purpose' module for subsequent registration of controllers and delegates
  angular.module('myApp', [ 'ngMaterial', 'ui.router' ])
  .controller('DepartmentController', [
           '$http', '$scope', '$mdEditDialog', '$q', '$timeout', '$mdDialog', '$mdToast', DepartmentController
       ]);

  /**
   * Controller
   * @constructor
   */
  function DepartmentController($http, $scope, $mdEditDialog, $q, $timeout, $mdDialog, $mdToast) {
    var self = this;
    $scope.pageName = "Department"; 
    $scope.selectedTab = 0; 
    var department_url = base_url + 'api/department/'; 

        $scope.optionShow  = false;

        $scope.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: false,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: false,
            pageSelect: false
        };

        $scope.selected = [];
        $scope.limitOptions = [5, 10, 15, {
                label: 'All',
                value: function () {
                    return $scope.desserts ? $scope.desserts.count : 0;
                }
            }];

        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        $scope.loadData = function () {
          $http.get(department_url + 'all').success(function (response) {
            $scope.datas = response;

            // $scope.selected.push($scope.desserts.data[1]);

            // $scope.selected.push({
            //   name: 'Ice cream sandwich',
            //   type: 'Ice cream',
            //   calories: { value: 237.0 },
            //   fat: { value: 9.0 },
            //   carbs: { value: 37.0 },
            //   protein: { value: 4.3 },
            //   sodium: { value: 129.0 },
            //   calcium: { value: 8.0 },
            //   iron: { value: 1.0 }
            // });

            // $scope.selected.push({
            //   name: 'Eclair',
            //   type: 'Pastry',
            //   calories: { value:  262.0 },
            //   fat: { value: 16.0 },
            //   carbs: { value: 24.0 },
            //   protein: { value:  6.0 },
            //   sodium: { value: 337.0 },
            //   calcium: { value:  6.0 },
            //   iron: { value: 7.0 }
            // });

            // $scope.promise = $timeout(function () {
            //   $scope.desserts = desserts.data;
            // }, 1000);
        });
        }

        //load the data
        $scope.loadData(); 

        $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };

        $scope.getStatus = function () {
            return [{id: 1, 'name': 'Active'}, {id: 1, 'name': 'Inactive'}];
        };

        $scope.onPaginate = function (page, limit) {
            console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
            console.log('Page: ' + page + ' Limit: ' + limit);

            $scope.promise = $timeout(function () {

            }, 2000);
        };

        $scope.deselect = function (item) {
            console.log(item.name, 'was deselected');
        };

        $scope.log = function (item) {
            console.log(item, 'was selected');
        };

        $scope.loadStuff = function () {
            $scope.promise = $timeout(function () {
              //refresh the data
              $scope.loadData(); 
            }, 2000);
        };

        $scope.onReorder = function (order) {
            console.log('Scope Order: ' + $scope.query.order);
            console.log('Order: ' + order);
            $scope.promise = $timeout(function () {

            }, 2000);
        };

        $scope.cancel = function () {
            $scope.department = {}; 
            $scope.selectedTab = 0; 
        }

        $scope.save = function (data) {
            $http.post(department_url + 'put', data).success(function(res){
                if (res.status) {
                    //get back to list tab and refresh list
                    $scope.department = {}; 
                    $scope.selectedTab = 0; 
                    $scope.loadData(); 
                } else {
                    //error message

                }
                $mdToast.show($mdToast.simple().textContent(res.message).position('top right'));
            }) 
        }

        $scope.editItem = function (i) {
            $http.get(department_url + 'get/' + i.id).success(function(res){
                console.log(res); 
                if (res.status) {
                    $scope.selectedTab = 1; 
                    $scope.department = res.data; 
                } else {
                    //toastr

                }
            }); 
        }

       $scope.deleteItem = function (ev, i) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                  .title('Are you sure ?')
                  // .textContent('All of the banks have agreed to forgive you your debts.')
                  // .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Please do it!')
                  .cancel('Not Now');

            $mdDialog.show(confirm).then(function() {
                //if user confirmed
                  $http.get(department_url + 'delete/' + i.id).success(function(res){
                    if (res.status) {
                        $scope.selectedTab = 0; 
                        $scope.loadData(); 

                    } else {
    
                    }
                    $mdToast.show($mdToast.simple().textContent(res.message).position('top right'));
                }); 
            }, function() {
              //if use click on cancel 

            });
          
            
        }
  }
})();
