// TODO: update to ES6
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: 'custom_css/*.css',
        tasks: ['concat']
      },
      react: {
        files: 'react_components/*.jsx',
        tasks: ['browserify']
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        // Put any custom CSS files in custom_css to have them included in the build
        src: ['node_modules/bootstrap/dist/css/bootstrap.min.css',
              'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
              'custom_css/*.css'],
        dest: 'build/theApp.css'
      },
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: ['react_components/**/*.jsx'],
        dest: 'build/theApp.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'browserify']);
};
