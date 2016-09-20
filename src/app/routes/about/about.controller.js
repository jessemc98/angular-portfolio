(function() {
  'use strict';

  angular
    .module('angularPortfolio')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;
    vm.extraInfo = false; //true if extra info about me is hidden
    vm.toggleExtraInfo = function(){
      vm.extraInfo = !vm.extraInfo;
    };
  }

})();