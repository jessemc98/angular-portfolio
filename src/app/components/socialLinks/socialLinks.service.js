(function () {
  angular
    .module('angularPortfolio')
    .factory('socialLinks', socialLinks);

  /** @ngInject */
  function socialLinks () {
    var links = [
      {'iconUrl': './assets/icons/github.svg', 'path': 'https://github.com/jessemc98/'},
      {'iconUrl': './assets/icons/linkedin.svg', 'path': 'https://www.linkedin.com/in/jesse-mcintosh-61b842117?trk=hp-identity-name'},
      {'iconUrl': './assets/icons/codepen.svg', 'path': 'http://codepen.io/jessemc98'}
    ];

    return links;
  }
})();