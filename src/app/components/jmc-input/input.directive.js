(function(){
  'use strict';

  angular
    .module('angularPortfolio')
    .directive('jmcInput', jmcInput);

    /** @ngInput */
    function jmcInput () {
      var directive = {
          restrict: 'E',
          templateUrl: 'app/components/jmc-input/input.html',
          replace: true,
          transclude: true,
        link: function(scope, elem){
          var $input = elem.find('input');
          $input.on('focus', function(){
        elem.addClass("is-active is-completed");
      });

      $input.on('focusout', function(){
        if($input.val() === "")
          elem.removeClass("is-completed");
        elem.removeClass("is-active");
      })
          }
      }
      return directive;
    }
})();