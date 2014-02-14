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
        files: ['build/js/**/*.js'],
        tasks: ['concat', 'uglify', 'copy']
      },
      css: {
        files: ['build/sass/*.sass'],
        tasks: ['compass:dist', 'copy', 'replace-css']
      },
      images: {
        files: ['build/imgs/*'],
        tasks: ['imagemin', 'copy']
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
          'assets/js/global.js' : ['build/js/global.js']
        }
      },
      flexy: {
        files: {
          'assets/js/flexy.js' : ['build/js/flexy.js']
        }
      }
    },
    copy: {
      js: {
        cwd: 'build/js/',
        src: '*',
        dest: 'assets/js/',
        expand: true
      },
      imgs: {
        cwd: 'build/imgs/',
        src: '**/*',
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
        src: ['t4/css/*.css'],
        overwrite: true,
        replacements: []
      }
    },
    concat: {
      dist: {
        src: [
          'build/js/components/_triggers.js',
          'build/js/components/_nav.js',
          'build/js/components/_documentClasses.js',
          'build/js/components/_photoCaptions.js',
          'build/js/components/_tabs.js',
          'build/js/components/_thumbnailPics.js',
          'build/js/components/_filterContent.js',
          'build/js/components/_flexslider.js'
        ],
        dest: 'build/js/global.js',
      },
      flexy: {
        src: [
          'build/js/flexy/_flexyNav.js',
          'build/js/flexy/_respond.js',
          'build/js/flexy/_fitvids.js'
        ],
        dest: 'build/js/flexy.js',
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
          fileTmpl: '<script src="../%s"></script>',
          appRoot: ''
        },
        files: {
          'templates/*.html': ['assets/lib/modernizr/modernizr.js']
        }
      },
      jquery: {
        options: {
          startTag: '<!--JQUERY-->',
          endTag: '<!--JQUERY END-->',
          fileTmpl: '<script src="../%s"></script>',
          appRoot: ''
        },
        files: {
          'templates/*.html': ['assets/lib/jquery/jquery.min.js']
        }
      },
      js : {
        options: {
          startTag: '<!--GLOBAL:JS-->',
          endTag: '<!--GLOBAL:JS END-->',
          fileTmpl: '<script src="../%s"></script>',
          appRoot: ''
        },
        files: {
          'templates/*.html': ['assets/js/global.js', 'assets/js/flexy.js']
        }
      },
      css : {
        options: {
          startTag: '<!--CSS-->',
          endTag: '<!--CSS END-->',
          fileTmpl: '<link rel="stylesheet" href="../%s"></script>',
          appRoot: ''
        },
        files: {
          'templates/*.html': ['assets/css/global.css', 'assets/css/global-flexy.css', '!assets/css/ie.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          cache: false,
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'build/imgs/',
          src: ['*/**/*.{png,jpg,gif}'],
          dest: 'assets/imgs/'
        }]
      }
    }
  });
  // load plugins
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-sails-linker');
  grunt.loadNpmTasks('grunt-text-replace');

grunt.registerTask('replace-css', function() {
  var replacements = grunt.file.readJSON('replacements.json');
  grunt.config('replace.images.replacements', replacements);
  grunt.task.run('replace');
});

// Default task.
grunt.registerTask('default', ['watch']);
grunt.registerTask('build', ['bower', 'compass', 'concat', 'uglify', 'imagemin', 'copy', 'sails-linker']);


};