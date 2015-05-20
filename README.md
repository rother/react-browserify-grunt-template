# react-browserify-grunt-template

A template for building [React](http://facebook.github.io/react/) applications.
It uses [browserify](https://github.com/substack/node-browserify), [grunt](https://github.com/gruntjs/grunt) and
[react-bootstrap](https://react-bootstrap.github.io/).

To get started:
* make sure [npm](https://www.npmjs.com/) is installed and grunt-cli is installed globally
("npm install -g grunt-cli")
* install all the requirements (run "sudo npm install" in the root directory)
* run "grunt" in the root directory, you can use "grunt watch" to automatically
check for changes
* start a server (e.g., "python -m SimpleHTTPServer" from the root directory)

Make sure to change the following files as needed:
* index.html - title tag, css files, id of the hook node, name of the loaded
script
* package.json - add packages you need
* Gruntfile.js - adapt as needed
* react_components - the actual code lives here, one jsx file per component.
* .git/config - change the origin as needed

The entry file is app.jsx
