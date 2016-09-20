(function() {
  'use strict';

  describe('controller home', function(){
    var vm;
//     var $timeout;
//     var toastr;

    beforeEach(module('angularPortfolio'));
    beforeEach(inject(function(_$controller_) {
//       spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
//       spyOn(_toastr_, 'info').and.callThrough();
      vm = _$controller_('HomeController');
    }));

    it('should be defined', function(){
      expect(vm).toBeDefined();
    });

    // it('should have a timestamp creation date', function() {
//       expect(vm.creationDate).toEqual(jasmine.any(Number));
//     });

//     it('should define animate class after delaying timeout ', function() {
//       $timeout.flush();
//       expect(vm.classAnimation).toEqual('rubberBand');
//     });

//     it('should show a Toastr info and stop animation when invoke showToastr()', function() {
//       vm.showToastr();
//       expect(toastr.info).toHaveBeenCalled();
//       expect(vm.classAnimation).toEqual('');
//     });

//     it('should define more than 5 awesome things', function() {
//       expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
//       expect(vm.awesomeThings.length === 5).toBeTruthy();
//     });
  });
})();
