//Expects attr links to be a list with objects
//inside with an icon and path attribute
(function(){
  'use strict';

  angular
    .module('angularPortfolio')
    .directive('jmcFollow', jmcFollow);

  /** @ngInject */
  function jmcFollow() {
    var directive = {
      restrict : 'E',
      templateUrl : 'app/components/jmc-follow/follow.html',
      replace : true,
      scope : {
        linksObj : '=links'
      },
      controller : FollowController,
      controllerAs : 'vm'
    }

    return directive;

    /** @ngInject */
    function FollowController() {
    }
  }
})();