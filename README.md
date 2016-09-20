## Jesse McIntosh's Portfolio SPA

## This project uses the following technologies
* *AngularJS*: AngularJS 1.5.3
* *Angular modules*: animate, messages, ngMaterial
* *Resource handler*: ngResource
* *Router*: ngRoute 
* *UI Framework*: Angular Material
* *CSS pre-processor*: Sass with Node
* *Testing framework/tools*: Jasmine, Karma, Protractor

Please examine the bower.json file for a complete list of the dependencies.
The package.json file contains a list of the Devdependencies used in the build process.

This website was scaffolded using [Yeoman](http://yeoman.io/) with the [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular).

## Directory structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

<pre>
├──  bower_components/
├──  e2e/
├──  gulp/
├──  nodes_modules/
│
├──  src/
│   ├──  app/
│   │   ├──  components/
│   │   │   └──  navbar/
│   │   │   │   ├──  navbar.directive.js
│   │   │   │   ├──  navbar.directive.spec.js
│   │   │   │   ├──  navbar.html
│   │   │   │   └──  navbar.(scss|css)
│   │   │   │
│   │   │   └──  webDevTec/
│   │   │       ├──  webDevTec.service.js
│   │   │       └──  webDevTec.service.spec.js
│   │   │
│   │   ├──  main/
│   │   │   ├──  main.controller.js
│   │   │   ├──  main.controller.spec.js
│   │   │   └──  main.html
│   │   │
│   │   └──  index.config.js
│   │   └──  index.constants.js
│   │   └──  index.module.js
│   │   └──  index.route.js
│   │   └──  index.run.js
│   │   └──  index.(scss|css)
|   |
│   ├──  assets/
│   │   └──  images/
│   ├──  favico.ico
│   └──  index.html
│
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .eslintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
└──  protractor.conf.js
</pre>

## Coding Convention
ngAnnotate is used in the build process which converts simple injection to complete syntax to be minification proof so there is no need to write it the long way.

Unit tests are kept in the same folder as the code being tested and are named the same with an added .spec. prefix (refer to the directory structure diagram above).

I like to use [John Papa's style](https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/) of using Angulars 'Controler As' feature, as i believe it helps keep code clean and readable as well as minimizing use of $scope's $apply and $watch functions in controllers. If you need to use $apply or $watch in a controller you should probably break it out into a service or use a directive.
Please take the time read John Papa's [article](https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/) as he explains the concept clearly and concisely.

## Usage

Below is some simplified usage info. For more information go to the [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) repository.

## Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

More information on the gulp tasks in the [Generators User Guide](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md).

## Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngAnnotate* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *autoprefixer* : add vendor prefixes to CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *eslint* : The pluggable linting utility for JavaScript
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application
* **TODO** lazy : don't process files which haven't changed when possible

**Warning**, the first file of a type in a folder is often missed by the Gulp watch, try to relaunch Gulp if it happens.

If you'd like to use any of my code in your projects feel free to use it as you wish.