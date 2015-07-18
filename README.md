# react-browserify-grunt-template

A template for building [React](http://facebook.github.io/react/) applications.
It uses [browserify](https://github.com/substack/node-browserify),
[grunt](https://github.com/gruntjs/grunt) and
[react-bootstrap](https://react-bootstrap.github.io/).

Note: this is the ES5 version, there's an
[ES6](https://github.com/rother/react-browserify-grunt-template/tree/es6) branch
which will be merged eventually. Feel free to use that branch if you prefer ES6.

To get started (on Unix like systems):
* make sure [npm](https://www.npmjs.com/) is installed and grunt-cli is
installed globally
("npm install -g grunt-cli")
* install all the requirements (run "sudo npm install" in the root directory)
* run "grunt" in the root directory, you can use "grunt watch" to automatically
check for changes
* start a server (e.g., "python -m SimpleHTTPServer" from the root directory)

Make sure to change the following files as needed:
* index.html - title tag, id of the hook node, name of the loaded
script
* react_components - the actual code lives here, one jsx file per component
* custom_css - your css files should go here
* package.json - add packages you need
* Gruntfile.js - adapt as needed
* .git/config - change the origin as needed

The entry file is app.jsx
