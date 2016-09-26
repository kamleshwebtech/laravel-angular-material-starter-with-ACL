(function(){
  'use strict';

  // Prepare the 'purpose' module for subsequent registration of controllers and delegates
  angular.module('myApp', [ 'ngMaterial', 'ui.router' ])
  .controller('CreditsController', [
          '$scope', '$mdDialog', CreditsController
       ]);

  /**
   * Controller
   * @constructor
   */
  function CreditsController($scope, $mdDialog) {
    var self = this;

    /**
     * No functionality here
     */
  }
})();
