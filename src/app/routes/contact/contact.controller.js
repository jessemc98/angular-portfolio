(function(){
	'use strict';

	angular.
	module('angularPortfolio').
	controller('ContactController', ContactController);

	/* ngInject */
	function ContactController(socialLinks) {
		var vm = this;
		vm.links = socialLinks;
	}
})();