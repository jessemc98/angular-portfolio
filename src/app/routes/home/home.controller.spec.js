(function() {
  'use strict';

  describe('controller home', function(){
    var vm;

    beforeEach(module('angularPortfolio'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('HomeController');
    }));

    it('should be defined', function(){
      expect(vm).toBeDefined();
    });
  });
})();
