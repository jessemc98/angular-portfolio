(function(){
	'use strict';

	angular.
	module('angularPortfolio').
	directive('jmcSkillHero', jmcSkillHero);

	/** nginject */
	function jmcSkillHero($timeout, $document, dividesBy) {
		var directive = {
			restrict : 'E',
			templateUrl : 'app/components/jmc-skills-hero/skills.html',
			replace : true,
			transclude : true,
			scope: {
				skill : '=',
				direction : '='
			},
			link : function(scope, elem) {
				var id = scope.skill.id;
				scope.active = false;
				var $body = angular.element($document[0].getElementsByTagName('body'));


				var open = function(){
					// run code to open skill //
					scope.active = true;

					// set/remove event listeners//
					elem.off('click', open);
					$timeout(function(){$body.on('click', close)});

					scope.$apply();
				};

				var close = function() {
					//run code to close skill//
					scope.active = false;

					//set/remove event listeners//
					$body.off('click', close);
					elem.on('click', open);

					scope.$apply();
				};

				function checkPos(){
				//add class depending on where skill is in 3x3 grid//
					if(id <= 3){
						elem.addClass('top');
					}

					if(dividesBy(3, id)){
						elem.addClass('onright');
						return;
					}
					if(dividesBy(3, id-2)){
						elem.addClass('onmid');
						return;
					}
					elem.addClass('onleft');
				}
				//initialize//
				// change color if defined //
				if (scope.skill.color) {
					elem.find('img').parent().css('background', scope.skill.color);
				}

				checkPos();
				elem.on('click', open);

			}
		};
		return directive;
	}

})();