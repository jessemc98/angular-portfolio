(function() {
  'use strict';

  angular
    .module('angularPortfolio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $anchorScroll) {
    // scroll to top on route change //
    $rootScope.$on('$locationChangeSuccess', function(){
      $anchorScroll();
    });

    $log.debug('runBlock end');
  }

})();
