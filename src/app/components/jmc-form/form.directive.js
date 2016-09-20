(function(){
  'use strict';

  angular
    .module('angularPortfolio')
    .directive('jmcForm', jmcForm);

    /** ngInject */
    function jmcForm() {
      var directive = {
        restrict : 'E',
        templateUrl : 'app/components/jmc-form/form.html',
        scope: {}
      };

      return directive;
    }

})();
