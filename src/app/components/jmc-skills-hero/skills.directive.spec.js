// (function(){
// 	'use strict';

// 	describe('jmcSkillsHero', function(){
// 		module('templates', 'angularPortfolio');

// 		var $compile, $scope, $rootScope, el;

// 		beforeEach(inject(function(_$compile_, _$rootScope_){
			
// 			$compile = _$compile_;
// 			$rootScope = _$rootScope_;
// 			$scope = _$rootScope_.$new();

// 			el = angular.element('<jmc-skill-hero skill="{{testSkill}}"></jmc-skill-hero>');
// 			$scope.testSkill = "{title:AngularJS', imageUrl:'assets/images/angular.png'}";

// 			$compile(el)($scope);
// 			$rootScope.$digest();

// 		}));

// 		it('should render an element to the DOM which contains some content', function() {
// 			expect(el.length).toEqual(1);
// 			expect(el.find('.jmc-skill-wrapper')).toBeDefined();
// 			console.log(el.find('.jmc-skill-wrapper'))
// 		});

// 		it('should toggle active class on the element when clicked', function() {
// 			// expect(el.hasClass('active')).toBeFalsy();
// 			// console.log(el[0], el[0].hasClass());

// 			el.click();
// 			// console.log(el);
// 			// $scope.$digest();
// 			// console.log(el);

// 			// expect(el.hasClass('active')).toBeTruthy();
// 		});


// 	});

// })();