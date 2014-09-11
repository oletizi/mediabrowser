/**
 * Created by orion on 9/11/14.
 */
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsdoc : {
      dist : {
        src: ['public/js/**/*.js', 'src/js/**/*.js', 'test/**/*.js'],
        options: {
          destination: 'doc'
        }
      }
    },

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['src/js/**/*.js'],
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    karma: {
      options: {
        configFile: 'karma.config.js'
      },

      // starts the karma server and watches for changed files, running tests on every change
      continuous: {},

      // one-time test run
      test: {
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },

    clean: {
      dist: ["dist/", "doc/"]
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('default', ['clean', 'karma:test', 'jsdoc', 'concat', 'uglify']);
  grunt.registerTask('dist', ['default']);
};

