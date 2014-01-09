'use strict';

module.exports = function(grunt) {
  // configure tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: '*.html',
        tasks: ['validation', 'copy']
      },
      js: {
        files: ['build/js/*.js'],
        tasks: ['uglify', 'copy']
      },
      css: {
        files: ['build/sass/*.sass'],
        tasks: ['compass:dist', 'copy', 'replace-css']
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/global.js' : ['build/js/*.js', '!build/js/jquery.js', '!build/js/modernizr.js']
        }
      }
    },
    copy: {
      js: {
        expand: true,
        cwd: 'build/js/',
        src: ['jquery.js', 'modernizr.js'],
        dest: 'assets/js/',
        flatten: true,
        filter: 'isFile',
      },
      imgs: {
        cwd: 'build/imgs/',
        src: '*',
        dest: 'assets/imgs/',
        expand: true
      },
      t4: {
        cwd: 'assets/',
        src: '*/**',
        dest: 't4/',
        expand: true
      },
      bower: {
        cwd: 'bower_components',
        src: '*/**',
        dest: 'assets/lib',
        expand: true
      }
    },
    replace: {
      images: {
        src: ['t4/css/global.css'],
        overwrite: true,
        replacements: []
      }
    },
    uncss: {
      dist: {
        files: {
          'assets/css/global.css': ['*.html']
        },
        options: {
          compress: true,
          ignore: ['a.pdf', 'a.pdf:after', 'a.excel', 'a.excel:after', 'a.word', 'a.word:after', '#rufio nav ul ul.dip', '#sidebar li a.current']
        }
      }
    },
    validation: {
      files: {
        src: ['*.html']
      }
    },
    cmq: {
      options: {
        log: true
      },
      dist: {
        files: {
          'assets/css/' : ['assets/css/*.css']
        }
      }
    },
    bower: {
      install:{
      }
    },
    'sails-linker': {
      modern: {
        options: {
          startTag: '<!--MODERNIZR-->',
          endTag: '<!--MODERNIZR END-->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: ''
        },
        files: {
          '*.html': ['assets/lib/modernizr/modernizr.js']
        }
      },
      jquery: {
        options: {
          startTag: '<!--JQUERY-->',
          endTag: '<!--JQUERY END-->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: ''
        },
        files: {
          '*.html': ['assets/lib/jquery/jquery.min.js']
        }
      },
      js : {
        options: {
          startTag: '<!--GLOBAL:JS-->',
          endTag: '<!--GLOBAL:JS END-->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: ''
        },
        files: {
          '*.html': ['assets/js/*.js']
        }
      },
      css : {
        options: {
          startTag: '<!--GLOBAL:CSS-->',
          endTag: '<!--GLOBAL:CSS END-->',
          fileTmpl: '<link rel="stylesheet" href="%s"></script>',
          appRoot: ''
        },
        files: {
          '*.html': ['assets/css/*.css', '!assets/css/ie.css']
        }
      }
    },
  });
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-sails-linker');
  grunt.loadNpmTasks('grunt-bower-task');

grunt.registerTask('replace-css', function() {
  var replacements = grunt.file.readJSON('replacements.json');
  grunt.config('replace.images.replacements', replacements);
  grunt.task.run('replace');
});

// Default task.
grunt.registerTask('default', ['watch']);
grunt.registerTask('build', ['bower', 'copy', 'sails-linker']);


};