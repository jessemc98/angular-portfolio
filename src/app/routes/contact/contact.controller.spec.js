(function() {
  'use strict';

  describe('ContactController', function(){
    var vm;
    beforeEach(function(){
      module('angularPortfolio');
      inject(function($controller){
        vm = $controller('ContactController');
      });
    });

    it('should have links defined', function(){
      expect(vm.links).toBeDefined();
      expect(vm.links).toEqual(jasmine.any(Array));
    });
    
  });

})();