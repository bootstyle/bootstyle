(function() {
    'use strict';

    var child_process = require('child_process');
    var concat = require('gulp-concat');
    var changed = require('gulp-changed');
    var del = require('del');
    var flatten = require('gulp-flatten');
    var gulp = require('gulp');
    var gulpIf = require('gulp-if');
    var gutil = require('gulp-util');
    var jshint = require('gulp-jshint');
    var less = require('gulp-less');
    var minifyCSS = require('gulp-minify-css');
    var ngAnnotate = require('gulp-ng-annotate');
    var open = require('gulp-open');
    var protractor = require('gulp-protractor');
    var plumber = require('gulp-plumber');
    var runSequence = require('run-sequence');
    var streamify = require('gulp-streamify'); // wrap old gulp plugins to use streams: https://github.com/nfroidure/gulp-streamify
    var uglify = require('gulp-uglify');
    var webserver = require('gulp-webserver');
    var yargs = require('yargs');

    var pkg = require('./package.json');
    var path = {
        src: './src/',
        src_bower: './src/bower/',
        bower_components: './bower_components/',
        build: './build/',
        build_bower: './build/bower/',

        // file patterns
        css: '**/*.css',
        fonts: '**/*.fonts',
        img: '**/*.img',
        js: '**/*.js',
        less: '**/*.less',
        html: '**/*.html',
        test: './test/',
        node_modules: './node_modules/',
        npm_bin: './node_modules/.bin/'
    };


    /**
     Clean
     */
    gulp.task('clean-build', function(cb) {
        del([path.build + '**/**'], cb);
    });

    gulp.task('clean-build-landing-page-css', function(cb) {
        del([path.build + 'css/**'], cb);
    });

    gulp.task('clean-build-fonts', function(cb) {
        del([path.build + 'fonts/**'], cb);
    });

    gulp.task('clean-build-img', function(cb) {
        del([path.build + 'img/**'], cb);
    });

    gulp.task('clean-build-js', function(cb) {
        del([path.build + 'js/**'], cb);
    });

    gulp.task('clean-build-less', function(cb) {
        del([path.build + 'less/**'], cb);
    });

    gulp.task('clean-build-html', function(cb) {
        del([path.build + 'html/**'], cb);
    });

    gulp.task('clean-build-root', function(cb) {
        del([path.build + '*.*'], cb);
    });


    /**
     Build
     */
    gulp.task('build', function(cb) {
        runSequence(
            'clean-build',
            [
//                'build-root',

//                'build-landing-page-css',
//                'build-editor-css',
//                'build-fonts',
//                'build-img',
                'build-js',
//                'build-less',
                'build-html'
            ],
            cb
        );
    });

    // our assets
    gulp.task('build-landing-page-css', function() {
        return gulp.src([path.src + 'css/landing_page/landing_page.less'])
            .pipe(changed(path.build + 'css'))
            .pipe(less())
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            .pipe(gulp.dest(path.build + 'css/landing_page/'));
    });

    gulp.task('build-editor-css', function() {
        return gulp.src([path.src + 'css/app/app.less'])
            .pipe(changed(path.build + 'css'))
            .pipe(less())
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            .pipe(gulp.dest(path.build + 'css/app/'));
    });

    gulp.task('build-js', function() {
        var inProduction = process.NODE_ENV === 'production';
        var ourJS = [
                path.src + '**/*-module.js',
                path.src + '**/*-constant.js',
                path.src + '**/*-value.js',
                path.src + '**/*-filter.js',
                path.src + '**/*-service.js',
                path.src + '**/*-directive.js',
                path.src + '**/*-controller.js',
                path.src + '**/*.js',
                path.src + 'app.js',
        ];

        var libJS = [
            path.bower_components + 'angular-spectrum-colorpicker/dist/angular-spectrum-colorpicker.min.js',
            path.src + '**/less.config.js',
            path.src + '**/less.min.js',
        ];

        gulp.src(ourJS)
            .pipe(jshint())
            .pipe(jshint.reporter('default'));

        return gulp.src(libJS.concat(ourJS))
            .pipe(concat('bootstyle.min.js'))
            .pipe(ngAnnotate())
            .pipe(gulpIf(inProduction, streamify(uglify())))
            .pipe(gulp.dest(path.build));
    });

    gulp.task('build-fonts', function() {
        return gulp.src(path.src + path.fonts)
            .pipe(changed(path.build + 'fonts'))
            .pipe(gulp.dest(path.build + 'fonts'));
    });

    gulp.task('build-img', function() {
        return gulp.src(path.src + path.img)
            .pipe(changed(path.build + 'img'))
            .pipe(gulp.dest(path.build + 'img'));
    });

    gulp.task('build-less', function() {
        return gulp.src(path.src + path.less)
            .pipe(changed(path.build + 'less'))
            .pipe(gulp.dest(path.build + 'less'));
    });

    gulp.task('build-html', function() {
        return gulp.src(path.src + path.html)
            .pipe(changed(path.build))
            .pipe(gulp.dest(path.build));
    });

    gulp.task('build-root', function() {
        return gulp.src(path.src + '*.*')
            .pipe(changed((path.build)))
            .pipe(gulp.dest(path.build));
    });


    /**
     Serve
     */
    gulp.task('serve', function() {
        gulp.src(path.build)
            .pipe(webserver({
                livereload: true,
                fallback: 'index.html'
            }));
    });


    /**
     Open
     */
    gulp.task('open', function() {
        return gulp.src(pkg.main)
            .pipe(open("", { url: 'http://localhost:8000' }));
    });


    /**
     Watch
     */
    gulp.task('watch', [
        'watch-shared-css',
        'watch-landing-page-css',
        'watch-app-css',
        'watch-fonts',
        'watch-img',
        'watch-js',
        'watch-less',
        'watch-html',
        'watch-root'
    ]);

    gulp.task('watch-shared-css', function() {
        return gulp.watch([ path.src + 'css/shared/**/*.*' ], ['build-landing-page-css', 'build-editor-css']);
    });

    gulp.task('watch-landing-page-css', function() {
        return gulp.watch([ path.src + 'css/landing_page/**/*.*' ], ['build-landing-page-css']);
    });

    gulp.task('watch-app-css', function() {
        return gulp.watch([ path.src + 'css/app/**/*.*' ], ['build-editor-css']);
    });

    gulp.task('watch-fonts', function() {
        return gulp.watch([ path.src + path.fonts ], ['build-fonts']);
    });

    gulp.task('watch-img', function() {
        return gulp.watch([ path.src + path.img ], ['build-img']);
    });

    gulp.task('watch-js', function() {
        return gulp.watch([ path.src + 'js/**/*.js' ], ['build-js']);
    });

    gulp.task('watch-less', function() {
        return gulp.watch([ path.src + path.less ], ['build-less']);
    });

    gulp.task('watch-html', function() {
        return gulp.watch([ path.src + path.html ], ['build-html']);
    });

    gulp.task('watch-root', function() {
        return gulp.watch([ path.src + '*.*'], ['build-root']);
    });


    /**
     Test
     */
    gulp.task('test', function(cb) {
        runSequence(
            'webdriver-update',
            'protractor',
            cb
        );
    });

    gulp.task('e2e', function() {
        gulp.src('test/e2e/**/*.spec.js')
            .pipe(protractor({
                configFile: "test/protractor.conf.js"
            }))
            .on('error', function(e) {
                throw e
            });
    });

    gulp.task('webdriver-update', function(cb) {
        child_process.exec('$(npm bin)/webdriver-manager update --standalone',
            function(error, stdout, stderr) {
                if (stdout) console.log(stdout);
                if (stderr) console.log('stderr: \n' + stderr);
                if (error) console.log('exec error: \n' + error);
                cb();
            });
    });

    gulp.task('iprotractor', function(cb) {
        var cmd = 'node';
        var args = [
                path.node_modules + '/protractor/bin/elementexplorer.js',
            'http://localhost:8000',
        ];
        var options = {
            detached: true
        };

        function logError(code, signal) {
            if (code) process.stdout.write(gutil.colors.red('closed with code ' + code + '\n'));
            if (signal) process.stdout.write('closed due to signal ' + signal + '\n');
        }

        process.stdin.on('data', function(data) {
            iprotractor.stdin.write(data);
        });

        var iprotractor = child_process.spawn(cmd, args, options);

        iprotractor.stdout.on('data', function(data) {
            process.stdout.write(data);
        });

        iprotractor.stderr.on('data', function(data) {
            process.stdout.write(gutil.colors.red('\nerr: ' + data));
        });

        iprotractor.on('error', function(err) {
            console.log(err);
        });

        iprotractor.on('close', function(code, signal) {
            if (code !== 0) {
                logError(code, signal);
            }
            process.stdin.end();
            process.kill();
            cb();
        });
    });

    gulp.task('protractor', function(cb) {
        var configPath = path.test + 'protractor.conf.js';
        var config = require(configPath).config;

        var debug = yargs.argv.debug;
        var suite = yargs.argv.suite;

        var cmd = path.npm_bin + 'protractor';
        var args = [configPath];
        var options = {
            detached: true
        };

        // add debug arg if present
        if (debug) {
            args.unshift(['debug'])
        }

        // error if suite arg does't exist in protractor config, otherwuse add the arg
        if (suite && !config.suites.hasOwnProperty(suite)) {
            process.stderr.write(gutil.colors.red('\nWhoops, there is no "' + suite + '" suite defined in ' + configPath + '\n\n'));
            cb();
            return;
        } else {
            args.push([ '--suite', suite ])
        }


        var protractor = child_process.spawn(cmd, args, options);

        protractor.stdout.on('data', function(data) {
            process.stdout.write(data);
        });

        protractor.stderr.on('data', function(data) {
            process.stdout.write('err: ' + data);
        });

        protractor.on('error', function(err) {
            process.stdout.write(gutil.colors.red('Protractor error signal and code: ' + err.signal + ', ' + err.code));
        });

        protractor.on('close', function(code, signal) {
            if (code) {
                process.stdout.write(gutil.colors.red('\nprotactor closed with code ' + code + '\n\n'));
            }

            if (signal) {
                process.stdout.write('protactor closed due to signal ' + signal);
            }

            cb();
        });

    });

    /**
     Default
     */
    gulp.task('default', function(cb) {
        runSequence(
            'build',
            'serve',
            'watch',
            cb
        );
    });

    gulp.task('develop', function(cb) {
        runSequence(
            'build',
            'watch',
            'serve',
            'open',
            cb
        );
    });

    gulp.task('heroku:production', ['build']);

}());
