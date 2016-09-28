(function(){
  'use strict';

  // Prepare the 'purpose' module for subsequent registration of controllers and delegates
  angular.module('myApp', [ 'ngMaterial', 'ui.router' ])
  .controller('ItemController', [
           '$http', '$scope', '$mdEditDialog', '$q', '$timeout', '$mdDialog', '$mdToast', ItemController
       ]);

  /**
   * Controller
   * @constructor
   */
  function ItemController($http, $scope, $mdEditDialog, $q, $timeout, $mdDialog, $mdToast) {
    var self = this;
    $scope.pageName = "Item"; 
    $scope.selectedTab = 0; 
    var url = base_url + 'api/item/'; 

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
                    return $scope.datas ? $scope.datas.count : 0;
                }
            }];

        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        $scope.loadData = function () {
          $http.get(url).success(function (res) {
            if (res.status) {
                $scope.datas = res;
                $scope.permissions = res.permission;
            } else {
                $mdToast.show($mdToast.simple().textContent(res.message).position('top right'));
            }

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
            if (data.id && data.id !== null) {
                //update
                $http.put(url + data.id, data).success(function(res){
                    if (res.status) {
                        $scope.data = {}; 
                        $scope.selectedTab = 0; 
                        $scope.loadData(); 
                    } else {
                        //error message
                    }
                    $mdToast.show($mdToast.simple().textContent(res.message).position('top right'));
                }).error(function (error, status){
                    $scope.errMsgContent = error; 
                    $scope.errMsg = true;  
                })
            } else {
                //insert
                $http.post(url, data).success(function(res){
                    if (res.status) {
                        $scope.data = {}; 
                        $scope.selectedTab = 0; 
                        $scope.loadData(); 
                    } else {
                        //error message
                    }
                    $mdToast.show($mdToast.simple().textContent(res.message).position('top right'));
                })
            }
        }

        $scope.editItem = function (i) {
            $http.get(url + i.id + "/edit").success(function(res){
                console.log(res); 
                if (res.status) {
                    $scope.selectedTab = 1; 
                    $scope.data = res.data; 
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
                  $http.delete(url + i.id).success(function(res){
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

        $scope.loadCategoryList = function () {
            $http.get(url + "category_list").success(function(res){
                if (res.status) {
                    $scope.categoryList = res.data; 
                } else {
                    //toasr error
                }
            })
        }

        $scope.loadCategoryList(); 
  }
})();
