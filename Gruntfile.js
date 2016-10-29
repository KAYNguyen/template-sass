module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'source/views/',
          src: ['*.jade'],
          dest: 'public/',
          ext: '.html'
        }]
      }
    },
    sass: {
      build: {
        options: {
          compress: false
        },
        files: [{
          'public/css/style.css': 'source/assets/css/style.scss'
        }]
      }
    },
    concat: {
      dist: {
        files: [{
          'public/js/modernizr.js': 'source/assets/js/libs/modernizr-2.6.2.js',
          'public/js/libs.js': ['source/assets/js/libs/jquery-1.10.2.js', 'source/assets/js/libs/plugins/*.js'],
          'public/js/l10n.js': 'source/assets/js/l10n.js',
          'public/js/plugins.js': ['source/assets/js/settings.js', 'source/assets/js/plugins/*.js']
        }]
      }
    },
    copy: {
      ajax: {
        files: [{
          expand: true,
          cwd: 'source/views/ajax/',
          src: '**/*',
          dest: 'public/ajax/'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: 'source/assets/images/',
          src: '**/*',
          dest: 'public/images/'
        }]
      },
      videos: {
        files: [{
          expand: true,
          cwd: 'source/assets/videos/',
          src: '**/*',
          dest: 'public/videos/'
        }]
      },
      xml: {
        files: [{
          expand: true,
          cwd: 'source/assets/xml/',
          src: '**/*',
          dest: 'public/xml/'
        }]
      },
      fonts: {
        files: [{
          expand: true,
          cwd: 'source/assets/fonts/',
          src: '**/*',
          dest: 'public/fonts/'
        }]
      },
      swf: {
        files: [{
          expand: true,
          cwd: 'source/assets/swf/',
          src: '**/*',
          dest: 'public/swf/'
        }]
      }
    },
    jshint: {
      options: {
        devel: false,
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        browser: true,
        expr: true,
        globals: {
          Modernizr: true,
          jQuery: true,
          $: true,
          console: true
        }
      },
      files: ['package.json', 'Gruntfile.js', 'source/assets/js/plugins/*.js', 'source/assets/js/*.js']
    },
    csslint: {
      options: {
        'important': true,
        'adjoining-classes': true,
        'known-properties': true,
        'box-sizing': true,
        'box-model': false,
        'overqualified-elements': true,
        'display-property-grouping': true,
        'bulletproof-font-face': true,
        'compatible-vendor-prefixes': true,
        'regex-selectors': true,
        'errors': true,
        'duplicate-background-images': true,
        'duplicate-properties': true,
        'empty-rules': true,
        'selector-max-approaching': true,
        'gradients': true,
        'fallback-colors': true,
        'font-sizes': false,
        'font-faces': true,
        'floats': true,
        'star-property-hack': false,
        'outline-none': false,
        'import': true,
        'ids': false,
        'underscore-property-hack': true,
        'rules-count': true,
        'qualified-headings': true,
        'selector-max': true,
        'shorthand': true,
        'text-indent': true,
        'unique-headings': false,
        'universal-selector': true,
        'unqualified-attributes': true,
        'vendor-prefix': true,
        'zero-units': true
      },
      files: ['public/css/*.css']
    },
    htmlhint: {
      options: {
        'tagname-lowercase': true,
        'attr-lowercase': true,
        'attr-value-double-quotes': true,
        'attr-value-not-empty': true,
        'doctype-first': true,
        'tag-pair': true,
        'spec-char-escape': true,
        'id-unique': true,
        'src-not-empty': true,
        'img-alt-require': true
      },
      files: ['public/*.html']
    },
    watch: {
      scripts: {
        files: ['package.json', 'Gruntfile.js', 'source/server.js', 'source/routes.js'],
        tasks: ['jshint']
      },
      js: {
        files: ['source/assets/js/plugins/*.js', 'source/assets/js/*.js', 'source/assets/*/*.js'],
        tasks: ['jshint', 'concat']
      },
      jade: {
        files: ['source/views/**/*.jade'],
        tasks: ['jade']
      },
      ajax: {
        files: ['source/views/ajax/**/*.*'],
        tasks: ['copy:ajax']
      },
      sass: {
        files: ['source/assets/css/**/*.scss'],
        tasks: ['sass']
      },
      fonts: {
        files: ['source/assets/fonts/**/*'],
        tasks: ['copy:fonts']
      },
      images: {
        files: ['source/assets/images/**/*'],
        tasks: ['copy:images']
      },
      videos: {
        files: ['source/assets/videos/**/*'],
        tasks: ['copy:videos']
      },
      xml: {
        files: ['source/assets/xml/**/*'],
        tasks: ['copy:xml']
      },
      swf: {
        files: ['source/assets/swf/**/*'],
        tasks: ['copy:swf']
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'public/images/',
          src: '**/*',
          dest: 'public/images/'
        }]
      }
    },
    cssmin: {
      compress: {
        files: [{
          'public/css/foundation.css': 'public/css/foundation.css',
          'public/css/normalize.css': 'public/css/normalize.css',
          'public/css/style.css': 'public/css/style.css',
        }]
      }
    },
    usemin: {
      html: ['public/**/*.html'],
      css: ['public/**/*.css']
    },
    uglify: {
      options: {
        compress: true,
        beautify: false,
        preserveComments: false
      },
      dist: {
        files: [{
          'public/js/modernizr.js': 'source/assets/js/libs/modernizr-2.6.2.js',
          'public/js/libs.js': ['source/assets/js/libs/jquery-1.10.2.js', 'source/assets/js/libs/plugins/*.js'],
          'public/js/l10n.js': 'source/assets/js/l10n.js',
          'public/js/plugins.js': ['source/assets/js/settings.js', 'source/assets/js/plugins/*.js']
        }]
      }
    },
    qunit: {
      options: {
        timeout: 10000,
        '--cookies-file': 'test/cookies.txt'
      },
      all: {
        options: {
          urls: [
            'http://localhost:8000/test/test.html'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },
    clean: {
      build: ['public']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.registerTask('default', ['clean', 'concat', 'sass', 'jade', 'copy', 'htmlhint', 'jshint']);
  grunt.registerTask('build', 'default');
  grunt.registerTask('test', ['connect', 'qunit']);
  grunt.registerTask('release', ['build', 'test', 'imagemin', 'uglify', 'cssmin', 'usemin']);
};
