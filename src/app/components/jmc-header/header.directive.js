(function() {
	'use strict';
	angular.
	module('angularPortfolio').
	directive('jmcHeader', jmcHeader);

	/** ngInject */
	function jmcHeader() {
		var directive = {
			restrict : 'E',
			templateUrl : 'app/components/jmc-header/header.html',
			scope : {
				title : '='
			}
		};
		return directive;
	}
})();