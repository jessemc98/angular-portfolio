(function() {
  'use strict';

  angular
    .module('angularPortfolioNav',[])
    .directive('jmcNavbar', jmcNavbar)
    .directive('jmcBackdrop', jmcBackdrop);

  /** @ngInject */
  function jmcNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/jmc-sidenav/sidenav.html',
      replace : true,
      scope: {},
      controller: NavbarController,
      controllerAs: 'nav'
      // bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(socialLinks, $document) {
      var vm = this;
      vm.isHidden = true;
      vm.disableBackdrop = false;
      var $body = angular.element($document[0].getElementsByTagName('body'));
      vm.links = [
        {'name': 'HOME', 'path': '#', 'color': '#0f4e6e'},
        {'name': 'ABOUT', 'path': '#about', 'color': '#1370a0'},
        {'name': 'BUILD LOG', 'path': '#build', 'color': '#3fbefe'},
        {'name': 'CONTACT', 'path': '#contact', 'color': '#79d2ff'}
      ];

      vm.social = socialLinks;

      vm.open = function() {
        vm.isHidden = false;
        //disables scrolling when opening the nav //
        $body.addClass('noscroll');

      };
      vm.close = function() {
        vm.isHidden = true;
        $body.removeClass('noscroll');
      }
      vm.toggle = function() {
        if (vm.isHidden) {
          vm.open();
        } else {
          vm.close();
        }
      }
    }
  }

  /** ngInject */
  function jmcBackdrop() {
    var directive = {
      restrict : 'A',
      require : '^jmcNavbar',
      link : function(scope, element, attrs, jmcNavbar){
        element.addClass('jmc-backdrop');


        //event listeners//
        element.on('click', function(){
          scope.$apply(jmcNavbar.close);
        });
      },
      controller : BackdropController,
      controllerAs : 'vm'
    };

    return directive;

    /** ngInject */
    function BackdropController() {
    }
  }

})();
