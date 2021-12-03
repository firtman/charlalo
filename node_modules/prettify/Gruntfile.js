/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/helpers/prettify
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'prettify.js',
        'tests/**/*.js'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      }
    },

    assemble: {
      options: {
        flatten: true,
        layoutdir: 'test',
        helpers: ['./prettify.js']
      },
      pages: {
        src: 'test/fixtures/*.hbs',
        dest: 'test/actual/'
      }
    },

    // Run mocha tests.
    mochaTest: {
      files: ['test/*.js']
    },
    mochaTestConfig: {
      options: {
        reporter: 'nyan'
      }
    },

    // Before generating any new files,
    // remove files from previous build.
    clean: {
      example: ['docs/*.html']
    }

  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('grunt-sync-pkg');
  grunt.loadNpmTasks('assemble');

  // When the "test" task is run, use Assemble to build templates
  // with the "prettify" helper, then run tests with mocha.
  grunt.registerTask('test', ['assemble', 'mochaTest']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'jshint', 'sync', 'readme']);

};