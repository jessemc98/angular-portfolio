(function(){
  'use strict';

  describe('service dividesBy', function(){
    var dividesBy;

    beforeEach(module('angularPortfolio'));
    beforeEach(inject(function(_dividesBy_){
      dividesBy = _dividesBy_;
    }));

    it('should return true if second parameter can be divided by first', function(){
      expect(dividesBy(3, 6)).toEqual(true);
      expect(dividesBy(1, 6)).toEqual(true);
    });
    it('should return false if second parameter cant be divided by first', function(){
      expect(dividesBy(4, 6)).toBeFalsy();
      expect(dividesBy(6, 1)).toBeFalsy();
    })
    it('should know what to do with a 0 zero', function(){
      expect(dividesBy(1, 0)).toBeTruthy();
      expect(dividesBy(0, 1)).toBeFalsy();
      expect(dividesBy(0, 0)).toBeFalsy();
    })
  });
})()