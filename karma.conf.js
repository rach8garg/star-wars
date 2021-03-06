// Karma configuration

module.exports = function(config) {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/**/jquery.min.js',
            'node_modules/**/angular.min.js',
            'node_modules/**/bootstrap.min.js',
            'node_modules/**/angular-ui-router.min.js',
            'node_modules/lodash/lodash.min.js',
            'specs/**/*.js',
            'client/app/**/*.js',
            'client/**/*.html',
            'index.html'
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['ng-html2js'],
            'client/app/**/*.js': ['babel', 'coverage']
        },

        babelPreprocessor: {
          options: {
            presets: ['es2015'],
            sourceMap: 'inline',
          },
          filename: function (file) {
            return file.originalPath.replace(/\.js$/, '.es5.js');
          },
          sourceFileName: function (file) {
            return file.originalPath;
          }
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',  // <-- change as needed for the project
            // include beforeEach(module('templates')) in unit tests
            moduleName: 'templates'
        },

        plugins: [
            'karma-phantomjs-launcher',
            //'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-junit-reporter',
            'karma-babel-preprocessor',
            'karma-coverage'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],

        // the default configuration
        junitReporter: {
            outputDir: 'test-results',
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'Firefox', 'IE'],
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        coverageReporter: {
            dir: 'reports/coverage',
            reporters: [
                { type: 'cobertura', subdir: 'cobertura', file: 'cobertura.xml' },
                { type: 'html', subdir: 'html', file: 'coverage.html'},
                { type: 'lcovonly', subdir: 'lcov', file: 'coverage.lcov'}
            ]
        }
    });

};
