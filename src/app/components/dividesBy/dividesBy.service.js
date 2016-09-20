(function () {
  'use strict';
  angular
    .module('angularPortfolio')
    .factory('dividesBy', dividesBy);

  /** @ngInject */
  function dividesBy () {
    function DividesBy (x, y) {
      // var x;
      //cant divide by 0//
      if (x <= 0) {
        return null;
      }
      var first = x;
      var dividesByX = function(num) {
        var divider = first;
         if (num % divider === 0){
           return true;
         }
        
        return false;
      };

      if (y) {
        return dividesByX(y) ;
      } else {
        return dividesByX;
      }
    }

    return DividesBy;
  }
})();