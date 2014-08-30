(function() {
    'use strict';

    var browserify = require('browserify');
    var del = require('del');
    var runSequence = require('run-sequence');
    var source = require('vinyl-source-stream'); // makes non-gulp pipelines (browserify, etc) gulp compatible: https://github.com/hughsk/vinyl-source-stream
    var watchify = require('watchify');

    var concat = require('gulp-concat');
    var changed = require("gulp-changed");
    var flatten = require('gulp-flatten');
    var gulp = require('gulp');
    var gutil = require("gulp-util");
    var mainBowerFiles = require('main-bower-files');
    var merge = require('merge-stream');
    var minifyCSS = require('gulp-minify-css');
    var open = require("gulp-open");
    var plumber = require('gulp-plumber'); // keep streaming on error (used by gulp-watch): https://github.com/floatdrop/gulp-plumber
    var streamify = require('gulp-streamify'); // wrap old gulp plugins to use streams: https://github.com/nfroidure/gulp-streamify
    var uglify = require('gulp-uglify');
    var webserver = require('gulp-webserver');


    var pkg = require('./package.json');
    var path = {
        app: './app/',
        app_bower: './app/bower/',
        bower_components: './bower_components/',
        build: './build/',
        build_bower: './build/bower/',
        css: 'css/**/*.*',
        fonts: 'fonts/**/*.*',
        js: 'js/**/*.*',
        less: 'less/**/*.less',
        partials: 'partials/**/*.*'
    };


    /**
     Clean
     */
        // app
    gulp.task('clean-app-bower', function(cb) {
        del([path.app + '**/bower/**'], cb);
    });

    // build
    gulp.task('clean-build', function(cb) {
        del([path.build], cb);
    });

    gulp.task('clean-build-bower', function(cb) {
        del([path.build + '**/bower/**'], cb);
    });

    gulp.task('clean-build-css', function(cb) {
        del([path.build + '**/css/**'], cb);
    });

    gulp.task('clean-build-fonts', function(cb) {
        del([path.build + '**/fonts/**'], cb);
    });

    gulp.task('clean-build-js', function(cb) {
        del([path.build + '**/js/**'], cb);
    });

    gulp.task('clean-build-less', function(cb) {
        del([path.build + '**/less/**'], cb);
    });

    gulp.task('clean-build-partials', function(cb) {
        del([path.build + '**/partials/**'], cb);
    });

    gulp.task('clean-build-root', function(cb) {
        del([path.build + '*.*'], cb);
    });


    /**
     Copy Bower Components
     */
    gulp.task('copy-bower-components', function(cb) {
        runSequence(
            'clean-app-bower',
            [
                'copy-bower-css',
                'copy-bower-fonts',
                'copy-bower-js',
                'copy-bower-bootstrap-less'
            ],
            cb
        );
    });

    gulp.task('copy-bower-css', function() {
        var css_reg = new RegExp('\.css$');
        return gulp.src(mainBowerFiles({filter: css_reg }), { base: path.bower_components })
            .pipe(flatten())
            .pipe(gulp.dest(path.app_bower + 'css'));
    });

    gulp.task('copy-bower-js', function() {
        var js_reg = new RegExp('\.js$');
        return gulp.src(mainBowerFiles({filter: js_reg }), { base: path.bower_components })
            .pipe(flatten())
            .pipe(gulp.dest(path.app_bower + 'js'));
    });

    gulp.task('copy-bower-fonts', function() {
        var font_reg = new RegExp('\.otf$|\.eot$|\.svg$|\.ttf$|\.woff$');
        return gulp.src(mainBowerFiles({filter: font_reg }), { base: path.bower_components })
            .pipe(flatten())
            .pipe(gulp.dest(path.app_bower + 'fonts'));
    });

    gulp.task('copy-bower-bootstrap-less', function() {
        return gulp.src(path.bower_components + 'bootstrap/less/**/*.*')
            .pipe(gulp.dest(path.app_bower + 'less/bootstrap'));
    });


    /**
     Build
     */
    gulp.task('build', function(cb) {
        runSequence(
            'clean-build',
            'build-bower',
            [
                'build-root',

                'build-css',
                'build-fonts',
                'build-js',
                'build-less',
                'build-partials'
            ],
            cb
        );
    });

    gulp.task('build-bower', function(cb) {
        runSequence(
            [
                'copy-bower-components',
                'clean-build-bower'
            ],
            [
                'build-bower-css',
                'build-bower-fonts',
                'build-bower-js',
                'build-bower-less',
                'build-bower-partials'
            ],
            cb
        );
    });

    // bower
    gulp.task('build-bower-css', function() {
        return gulp.src([path.app_bower + path.css])
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            .pipe(gulp.dest(path.build_bower + 'css'));
    });

    gulp.task('build-bower-fonts', function() {
        return gulp.src(path.app_bower + path.fonts)
            .pipe(gulp.dest(path.build_bower + 'fonts'));
    });

    gulp.task('build-bower-js', function() {
        return gulp.src(path.app_bower + path.js)
            .pipe(gulp.dest(path.build_bower + 'js'));
    });

    gulp.task('build-bower-less', function() {
        return gulp.src(path.app_bower + path.less)
            .pipe(gulp.dest(path.build_bower + 'less'));
    });

    gulp.task('build-bower-partials', function() {
        return gulp.src(path.app_bower + path.partials)
            .pipe(gulp.dest(path.build_bower + 'partials'));
    });

    // our assets
    gulp.task('build-css', function() {
        return gulp.src([path.app + path.css])
            .pipe(changed(path.build + 'css'))
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            .pipe(gulp.dest(path.build + 'css'));
    });

    gulp.task('build-js', function() {
        var bundleStream = browserify(path.app + 'js/app.js').bundle();

        return bundleStream
            .pipe(source('app.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest(path.build + 'js'));
    });

    gulp.task('build-fonts', function() {
        return gulp.src(path.app + path.fonts)
            .pipe(changed(path.build + 'fonts'))
            .pipe(gulp.dest(path.build + 'fonts'));
    });

    gulp.task('build-less', function() {
        return gulp.src(path.app + path.less)
            .pipe(changed(path.build + 'less'))
            .pipe(gulp.dest(path.build + 'less'));
    });

    gulp.task('build-partials', function() {
        return gulp.src(path.app + path.partials)
            .pipe(changed(path.build + 'partials'))
            .pipe(gulp.dest(path.build + 'partials'));
    });

    gulp.task('build-root', function() {
        return gulp.src(path.app + '*.*')
            .pipe(changed((path.build)))
            .pipe(gulp.dest(path.build));
    });


    /**
     Serve
     */
    gulp.task('serve', function() {
        gulp.src(path.build)
            .pipe(webserver({
                root: ['.'],
                livereload: true
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
        'watch-bower-components',
        'watch-css',
        'watch-fonts',
        'watch-js',
        'watch-less',
        'watch-partials',
        'watch-root'
    ]);

    gulp.task('watch-bower-components', function() {
        return gulp.watch([ path.bower_components ], ['build-bower']);
    });

    gulp.task('watch-css', function() {
        return gulp.watch([ path.app + path.css ], ['build-css']);
    });

    gulp.task('watch-fonts', function() {
        return gulp.watch([ path.app + path.fonts ], ['build-fonts']);
    });

    gulp.task('watch-js', function() {
        var bundler = watchify(browserify('./app/js/app.js', watchify.args));

        bundler.on('update', rebundle);

        function rebundle() {
            return bundler.bundle()
                .on('error', function(err) {
                    gutil.log(err);
                    throw err
                })
                .pipe(source('app.js'))
                .pipe(gulp.dest(path.build + 'js'));
        }

        return rebundle();
    });

    gulp.task('watch-less', function() {
        return gulp.watch([ path.app + path.less ], ['build-less']);
    });

    gulp.task('watch-partials', function() {
        return gulp.watch([ path.app + path.partials ], ['build-partials']);
    });

    gulp.task('watch-root', function() {
        return gulp.watch([ path.app + '*.*'], ['build-root']);
    });

    /**
     Default
     */
    gulp.task('default', function(cb) {
        runSequence(
            'copy-bower-components',
            'build',
            cb
        );
    });

    gulp.task('develop', function(cb) {
        runSequence(
            'copy-bower-components',
            'build',
            'watch',
            'serve',
            'open',
            cb
        );
    });

    gulp.task('heroku:production', function(cb) {
        runSequence(
            'copy-bower-components',
            'build-root',
            'build-bower',
            'build-css',
            'build-less',
            'build-fonts',
            'build-partials',
            'build-js',
            cb
        );
    });

    var plumberError = function(err) {
        gutil.beep();
        gutil.log(err);
    };

}());
