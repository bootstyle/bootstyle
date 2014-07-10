(function() {
    'use strict';

    var browserify = require('browserify');
    var merge = require('merge-stream');
    var source = require('vinyl-source-stream'); // makes non-gulp pipelines (browserify, etc) gulp compatible: https://github.com/hughsk/vinyl-source-stream
    var del = require('del');
    var runSequence = require('run-sequence');

    var gulp = require('gulp');
    var gulpBowerFiles = require('gulp-bower-files');
    var concat = require('gulp-concat');
    var gulpFilter = require('gulp-filter');
    var flatten = require('gulp-flatten');
    var minifyCSS = require('gulp-minify-css');
    var uglify = require('gulp-uglify');
    var rimraf = require('gulp-rimraf');
    var connect = require('gulp-connect');
    var webserver = require('gulp-webserver');
    var watch = require('gulp-watch');
    var plumber = require('gulp-plumber'); // keep streaming on error (used by gulp-watch): https://github.com/floatdrop/gulp-plumber
    var streamify = require('gulp-streamify'); // wrap old gulp plugins to use streams: https://github.com/nfroidure/gulp-streamify


    var pkg = require('./package.json');
    var paths = {
        app: './app/',
        bower: './bower_components/',
        build: './build/',
        css: 'css/**/*.css',
        fonts: 'fonts/**/*.*',
        js: 'js/**/*.js',
        less: 'less/**/*.less',
        partials: 'partials/**/*.html',
    };

    /**
     Clean
     */
    // app
    gulp.task('clean-app-bower', function() {
        del.sync([paths.app + '**/bower/**']);
    });

    // build
    gulp.task('clean-build', function() {
        del.sync([paths.build]);
    });

    gulp.task('clean-build-css', function() {
        del.sync([paths.build + '**/css/**']);
    });

    gulp.task('clean-build-fonts', function() {
        del.sync([paths.build + '**/fonts/**']);
    });

    gulp.task('clean-build-js', function() {
        del.sync([paths.build + '**/js/**']);
    });

    gulp.task('clean-build-less', function() {
        del.sync([paths.build + '**/less/**']);
    });

    gulp.task('clean-build-partials', function() {
        del.sync([paths.build + '**/partials/**']);
    });

    gulp.task('clean-build-root', function() {
        del.sync([paths.build + '**/*.*']);
    });


    /**
     Copy Bower Components
     */
    gulp.task('copy-bower', ['clean-app-bower'], function() {
        var cssFilter = gulpFilter('**/*.css');
        var fontFilter = gulpFilter([ '**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff' ]);
        var jsFilter = gulpFilter('**/*.js');
        var bootstrapLessFilter = gulpFilter('bootstrap/**/*.less');

        return gulpBowerFiles()
            .pipe(watch())
            .pipe(plumber())
            .pipe(cssFilter)
            .pipe(flatten())
            .pipe(gulp.dest(paths.app + 'css/bower'))
            .pipe(cssFilter.restore())

            .pipe(fontFilter)
            .pipe(flatten())
            .pipe(gulp.dest(paths.app + 'fonts/bower'))
            .pipe(fontFilter.restore())

            .pipe(jsFilter)
            .pipe(flatten())
            .pipe(gulp.dest(paths.app + 'js/bower'))
            .pipe(jsFilter.restore())

            .pipe(bootstrapLessFilter)
            .pipe(flatten())
            .pipe(gulp.dest(paths.app + 'less/bower/bootstrap'));
    });


    /**
     Build
     */
    gulp.task('build', function() {
        runSequence(
            [
                'build-css',
                'build-fonts',
                'build-js',
                'build-less',
                'build-partials',
                'build-root'
            ]
        )
    });

    gulp.task('build-css', ['clean-build-css'], function() {
        return gulp.src(paths.app + paths.css)
            .pipe(watch())
            .pipe(plumber())
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            //.pipe(concat(pkg.name.toLowerCase() + '.min.css'))
            .pipe(gulp.dest(paths.build + 'css'));
    });

    gulp.task('build-js', ['clean-build-js'], function() {
        var b = browserify(paths.app + 'js/app.js');
        var bundleStream = b.bundle();
        var gulpBrowserify = bundleStream.pipe(source('app.js'));

        return gulpBrowserify
            .pipe(watch())
            .pipe(plumber())
            .pipe(streamify(uglify({ mangle: true })))
            .pipe(gulp.dest(paths.build + 'js'));
    });

    gulp.task('build-fonts', ['clean-build-fonts'], function() {
        return gulp.src(paths.app + paths.fonts)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(paths.build + 'fonts'));
    });

    gulp.task('build-less', ['clean-build-less'], function() {
        return gulp.src(paths.app + paths.less)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(paths.build + 'less'));
    });

    gulp.task('build-partials', ['clean-build-partials'], function() {
        return gulp.src(paths.app + paths.partials)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(paths.build + 'partials'));
    });

    gulp.task('build-root', ['clean-build-root'], function() {
        return gulp.src(paths.app + '*.*')
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(paths.build));
    });


    /**
     Connect
     */
    gulp.task('connect-dev', function() {
        return gulp.src('build')
            .pipe(webserver({
                livereload: true,
                fallback: 'index.html'
            }));
    });

    gulp.task('connect-prod', function() {
        return gulp.src('app')
            .pipe(webserver({
                port: 80
            }));
    });


    /**
     Default
     */
    gulp.task('default', function() {
        runSequence(
            'build',
            'connect-dev'
        )
    });

}());
