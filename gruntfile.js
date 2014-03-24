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
        files: 'build/views/*.html',
        tasks: ['includereplace', 'sails-linker', 'validation', 't4']
      },
      js: {
        files: ['build/js/**/*.js'],
        tasks: ['concat', 'uglify']
      },
      css: {
        files: ['build/sass/**/*.sass'],
        tasks: ['compass', 'autoprefixer', 'copy', 't4']
      },
      images: {
        files: ['build/imgs/*'],
        tasks: ['imagemin', 't4']
      },
      includes: {
        files: ['build/inc/*'],
        tasks: ['includereplace', 'sails-linker', 'validation', 't4']
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
          't4/js/global.js' : ['assets/js/global.js'],
          't4/js/global-flexy.js' : ['assets/js/global-flexy.js']
        }
      }
    },
    copy: {
      bower: {
        cwd: 'build/js/lib/',
        src: '*/**',
        dest: 'assets/js/lib',
        expand: true
      },
      css: {
        cwd: 'assets/css/',
        src: '*',
        dest: 't4/css/',
        expand: true
      }
    },
    replace: {
      t4css: {
        src: ['t4/css/*.css'],
        overwrite: true,
        replacements: []
      },
      t4html: {
        src: ['t4/views/*.html'],
        overwrite: true,
        replacements: []
      },
    },
    validation: {
      files: {
        src: ['assets/views/*.html']
      }
    },
    cmq: {
      dist: {
        files: {
          't4/css/' : ['assets/css/*.css']
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          't4/css/global.css': ['t4/css/global.css'],
          't4/css/global-flexy.css': ['t4/css/global-flexy.css'],
          't4/css/ie.css': ['t4/css/ie.css']
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
          appRoot: 'assets/'
        },
        files: {
          'assets/views/*.html': ['assets/js/lib/modernizr/modernizr.js']
        }
      },
      js : {
        options: {
          startTag: '<!--GLOBAL:JS-->',
          endTag: '<!--GLOBAL:JS END-->',
          fileTmpl: '<script src="../%s"></script>',
          appRoot: 'assets/'
        },
        files: {
          'assets/views/*.html': ['assets/js/*.js']
        }
      },
      css: {
        options: {
          startTag: '<!--CSS-->',
          endTag: '<!--CSS END-->',
          fileTmpl: '<link rel="stylesheet" href="../%s" />',
          appRoot: 'assets/'
        },
        files: {
          'assets/views/*.html': ['assets/css/global.css', 'assets/css/global-flexy.css', '!assets/css/ie.css']
        }
      },
      cssPrint: {
        options: {
          startTag: '<!--CSS Print-->',
          endTag: '<!--CSS Print END-->',
          fileTmpl: '<link rel="stylesheet" media="print" href="../%s" />',
          appRoot: 'assets/'
        },
        files: {
          'assets/views/*.html': ['assets/css/print.css']
        }
      },
      ie : {
        options: {
          startTag: '<!--[if lte IE 8]>',
          endTag: '<![endif]-->',
          fileTmpl: '<link rel="stylesheet" href="../%s" />',
          appRoot: 'assets/'
        },
        files: {
          'assets/views/*.html': ['assets/css/ie.css', 'assets/js/lib/html5shiv/dist/html5shiv.js', 'assets/js/lib/respond/dest/respond.min.js']
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
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/imgs/'
        }]
      }
    },
    includereplace: {
      dist: {
        options: {
          includesDir: 'build/inc/'
        },
        src: '*.html',
        dest: 'assets/views/',
        cwd: 'build/views/',
        expand: 'true'
      }
    },
    concat: {
      dist: {
        src: [
          'build/js/components/_nav.js',
          'build/js/components/_documentClasses.js',
          'build/js/components/_tabs.js',
          'build/js/components/_thumbnailPics.js',
          'build/js/components/_cancerNav.js', 
          'build/js/components/_filterContent.js', 
          'build/js/components/_fitvids.js', 
          'build/js/components/_flexslider.js',
          'build/js/components/_triggers.js'
        ],
        dest: 'assets/js/global.js',
      },
      flexy: {
        src: [
          'build/js/flexy/_flexyNav.js',
        ],
        dest: 'assets/js/global-flexy.js',
      }
    },
    browserSync: {
      files: {
        src : ['build/sass/*.sass', 'build/js/*.js', 'assets/build/*.html']
      },
      options: {
        watchTask: true,
        ghostMode: {
          clicks: true,
          scroll: true,
          links: true,
          forms: true
        },
        server: {
          baseDir: 'assets/'
        }
      }
    },
    autoprefixer: {
      files: {
        expand: true,
        flatten: true,
        src: 'assets/css/*.css',
        dest:'assets/css/'
      }
    }
  });
  // load plugins
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-sails-linker');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');

grunt.registerTask('replace-t4', function() {
  var cssReplacements = grunt.file.readJSON('replacements.json');
  grunt.config('replace.t4css.replacements', cssReplacements);
  grunt.task.run('replace');
});

//Build the initial directories
grunt.registerTask('build', ['bower', 'compass', 'concat', 'imagemin', 'copy:bower',  'includereplace', 'sails-linker', 't4', 'uglify', 'cmq', 'cssmin', 'watch']);

//Builds T4 directory
grunt.registerTask('t4', ['replace-t4']);

// Default task
grunt.registerTask('default', ['watch']);

//address will be: http://172.31.2.192:3002/views/index.html
grunt.registerTask('watchB', ['browserSync', 'watch']);

};