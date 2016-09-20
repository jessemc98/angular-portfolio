(function(){
	'use strict';

	angular
	.module('angularPortfolio')
	.directive('jmcPortrait', jmcPortrait);

	/** @nginject */
	function jmcPortrait () {
		var directive = {
			restrict : "E",
			templateUrl : 'app/components/jmc-portrait/portrait.html',
			scope : {
				msg : '='
			},
			controller : PortraitController,
			controllerAs : 'vm'
		}

		return directive;
		
		/** @ngInject */
		function PortraitController (socialLinks) {
			var vm = this;
			vm.links = socialLinks;
		}
	}


})();