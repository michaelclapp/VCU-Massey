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
        tasks: ['uglify', 'copy:js']
      },
      css: {
        files: ['build/sass/*.sass'],
        tasks: ['compass', 'cmq', 'uncss', 'copy', 'replace']
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'build/sass',
          cssDir: 'assets/css',
          config: 'config.rb',
          outputStyle: 'compressed'
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
        src: '**/*',
        dest: 'assets/imgs/',
        expand: true
      },
      t4: {
        cwd: 'assets/',
        src: '*/**',
        dest: 't4/',
        expand: true
      }
    },
    replace: {
      images: {
        src: ['t4/css/*.css'],
        overwrite: true,
        replacements: [
          {from: '../imgs/layout/background.jpg', to: '<t4 type="media" id="35702" formatter="path/*"/>'},
          {from: '../imgs/layout/icons/icon-pdf.gif', to: '<t4 type="media" id="41389" formatter="path/*"/>'},
          {from: '../imgs/layout/icons/icon-excel.gif', to: '<t4 type="media" id="41389" formatter="path/*"/>'},
          {from: '../imgs/layout/icons/icon-word.gif', to: '<t4 type="media" id="41390" formatter="path/*"/>'},
          {from: '../imgs/layout/li-bullet.gif', to: '<t4 type="media" id="35695" formatter="path/*"/>'},
          {from: '../imgs/layout/li-bullet2.gif', to: '<t4 type="media" id="35694" formatter="path/*"/>'},
          {from: '../imgs/layout/vcu-identity/body-bg.gif', to: '<t4 type="media" id="42666" formatter="path/*"/>'},
          {from: '../imgs/layout/vcu-identity/vcubrand.gif', to: '<t4 type="media" id="42667" formatter="path/*"/>'},
          {from: '../imgs/layout/header-gradient.jpg', to: '<t4 type="media" id="36474" formatter="path/*"/>'},
          {from: '../imgs/layout/massey.png', to: '<t4 type="media" id="36476" formatter="path/*"/>'},
          {from: '../imgs/layout/ncicc-link.gif', to: '<t4 type="media" id="35807" formatter="path/*"/>'},
          {from: '../imgs/layout/search-bg.gif', to: '<t4 type="media" id="35701" formatter="path/*"/>'},
          {from: '../imgs/layout/search-btn.gif', to: '<t4 type="media" id="35699" formatter="path/*"/>'},
          {from: '../imgs/layout/nav-bar.png', to: '<t4 type="media" id="36545" formatter="path/*"/>'},
          {from: '../imgs/layout/icons/quicklinks.png', to: '<t4 type="media" id="42671" formatter="path/*"/>'},
          {from: '../imgs/layout/btn-submit.gif', to: '<t4 type="media" id="35693" formatter="path/*"/>'},
          {from: '../imgs/layout/util-nav-icons.png', to: '<t4 type="media" id="35692" formatter="path/*"/>'},
          {from: '../imgs/layout/footer.jpg', to: '<t4 type="media" id="36471" formatter="path/*"/>'},
          {from: '../imgs/layout/footer-icons.png', to: '<t4 type="media" id="36477" formatter="path/*"/>'},
          {from: '../imgs/layout/pencil.gif', to: '<t4 type="media" id="42708" formatter="path/*"/>'},
          //from home.sass
          {from: '../imgs/layout/home-news.png', to: '<t4 type="media" id="41588" formatter="path/*"/>'},
          {from: '../imgs/layout/icon-calendar-bg.gif', to: '<t4 type="media" id="35675" formatter="path/*"/>'},
          {from: '../imgs/layout/intro-nav.gif', to: '<t4 type="media" id="35665" formatter="path/*"/>'},
          //from flexslider.sass
          {from: '../imgs/layout/caption-bg.png', to: '<t4 type="media" id="36478" formatter="path/*"/>'},
          {from: '../imgs/layout/slide-nav2.png', to: '<t4 type="media" id="42038" formatter="path/*"/>'},
         
          //Continue adding images that are linked in the CSS here!
        ]
      }
    },
    uncss: {
      dist: {
        options: {
          compress: true,
          ignore: ['a.pdf', 'a.pdf:after', 'a.excel', 'a.excel:after', 'a.word', 'a.word:after', '#rufio nav ul ul.dip']
        },
        files: {
          'assets/css/global.css': ['index.html']
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
  

  // Default task.
grunt.registerTask('default', ['watch']);


};