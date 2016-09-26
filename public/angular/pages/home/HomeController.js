(function () {

    angular
            .module('myApp')
            .controller('HomeController', [
                '$http', '$scope', '$mdEditDialog', '$q', '$timeout', '$mdToast', '$mdDialog', HomeController
            ]);

    /**
     * Controller
     * @constructor
     */
    function HomeController($http, $scope, $mdEditDialog, $q, $timeout, $mdToast, $mdDialog) {
        var self = this;

    }
})();
