(function(){
  'use strict';

  angular
    .module('angularPortfolioNav')
      .directive('jmcNavLinks', jmcNavLinks);

  /** ngInject */
  function jmcNavLinks($location) {
    var directive = {
      restrict : 'E',
      templateUrl : 'app/components/jmc-sidenav/navlinks.html',
      replace : true,
      scope : {
        info : '='
      },
      link : function (scope, element, attrs) {
        //add style for ng-class to use//
        scope.divStyle = {'background': scope.info.color,
          'border-color': scope.info.color};
        scope.aStyle = {'color': scope.info.color,
          'transition-delay': String(attrs.delay) + 'ms'};

        scope.checkIfActive = function() {
        //sets scope.active true if location matches links path//
          scope.active = false;
          if ($location.url().substr(1) === scope.info.path.substr(1)) {
            scope.active = true;
          }
        };

        
        scope.changeUrl = function() {
        //adds change url method to scope//
          $location.path('/' + scope.info.path.substr(1));
        };

        //  Set Event Listeners  //
        //check if link should be active on location change//
        scope.$on('$locationChangeSuccess', function(){
          scope.checkIfActive();
        });

        // Init functions //
        scope.checkIfActive();
      }
    };
    return directive;
  }  
})();
