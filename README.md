# Node.js (4.0.0) Backend Boilerplate

This is a simple boilerplate Express.js RESTful backend written in pure ECMAScript 6, transpiled via Babel.js until the v8 interpretter supports ECMAScript 2015 modules.

After cloning, please run the following commands:

`npm install -g gulp esdoc mocha`

`npm install`

The boilerplate supports all the following functionality, with the given dependencies:

* Transpiling ES6 -> ES5 - Babel.js
* Unit Testing - Mocha.js w/ Chai.js
* Code Documentation - ESDoc
* ES6 Linting - ESLint w/ babel-eslint parser
* Build System - Gulp.js
* API Documentation - apidoc
* Test Coverage - Coveralls Reporting w/ Istanbul
* Continuous Integration - Travis CI (deploy docs to gh-pages branch)

## Building

To build the application, run `gulp` in the root directory. This command will generate documentation, and transpile your code using Babel.js

## Testing

To test the application, run `gulp test` in the root directory. This command will run all tests located within the `test` directory.

## Running

To run the example, run `npm start` in the root directory. This command will run `app.js` located within the `dist` folder.

## Miscellaneous Documentation

* Mocha.js / Chai.js / Supertest - https://developmentnow.com/2015/02/05/make-your-node-js-api-bulletproof-how-to-test-with-mocha-chai-and-supertest/
* Babel.js - https://babeljs.io/
* Gulp - http://gulpjs.com/
