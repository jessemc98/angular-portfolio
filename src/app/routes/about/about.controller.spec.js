(function(){
	'use strict';

	describe('AboutController', function(){
		var vm;

		beforeEach(module('angularPortfolio'));
		beforeEach(inject(function($controller){
			vm = $controller('AboutController');
		}));

		it('should have an extraInfo property set to false by default', function(){
			expect(vm.extraInfo).toBeFalsy();
		})

		describe('vm.toggleExtraInfo function', function(){
			it('should toggle extraInfo property from true to false', function(){
				vm.extraInfo = true;
				vm.toggleExtraInfo();

				expect(vm.extraInfo).toBeFalsy();

				vm.toggleExtraInfo();

				expect(vm.extraInfo).toBeTruthy();


			});
		});
	});
})();