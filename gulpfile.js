(function() {
    'use strict';

    var browserify = require('browserify');
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
    var webserver = require('gulp-webserver');
    var watch = require('gulp-watch');
    var plumber = require('gulp-plumber'); // keep streaming on error (used by gulp-watch): https://github.com/floatdrop/gulp-plumber
    var streamify = require('gulp-streamify'); // wrap old gulp plugins to use streams: https://github.com/nfroidure/gulp-streamify
    var open = require("gulp-open");


    var pkg = require('./package.json');
    var path = {
        app: './app/',
        bower: './bower_components/',
        build: './build/',
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
    gulp.task('clean-app-bower', function() {
        del.sync([path.app + '**/bower/**']);
    });

    // build
    gulp.task('clean-build', function() {
        del.sync([path.build]);
    });

    gulp.task('clean-build-css', function() {
        del.sync([path.build + '**/css/**']);
    });

    gulp.task('clean-build-fonts', function() {
        del.sync([path.build + '**/fonts/**']);
    });

    gulp.task('clean-build-js', function() {
        del.sync([path.build + '**/js/**']);
    });

    gulp.task('clean-build-less', function() {
        del.sync([path.build + '**/less/**']);
    });

    gulp.task('clean-build-partials', function() {
        del.sync([path.build + '**/partials/**']);
    });

    gulp.task('clean-build-root', function() {
        del.sync([path.build + '**/*.*']);
    });


    /**
     Copy Bower Components
     */
    gulp.task('copy-bower', ['clean-app-bower'], function() {
        var cssFilter = gulpFilter('**/*.css');
        var fontFilter = gulpFilter([ '**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff' ]);
        var jsFilter = gulpFilter('**/*.js');
        var lessFilter = gulpFilter('**/*.less');

        gulpBowerFiles()
            .pipe(cssFilter)
            .pipe(flatten())
            .pipe(gulp.dest(path.app + 'css/bower'))
            .pipe(cssFilter.restore())

            .pipe(fontFilter)
            .pipe(flatten())
            .pipe(gulp.dest(path.app + 'fonts/bower'))
            .pipe(fontFilter.restore())

            .pipe(jsFilter)
            .pipe(flatten())
            .pipe(gulp.dest(path.app + 'js/bower'))
            .pipe(jsFilter.restore())

            .pipe(lessFilter)
            .pipe(flatten())
            .pipe(gulp.dest(path.app + 'less/bower/bootstrap'));
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
        );
    });

    gulp.task('build-css', ['clean-build-css'], function() {
        return gulp.src(path.app + path.css)
            .pipe(watch())
            .pipe(plumber())
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            //.pipe(concat(pkg.name.toLowerCase() + '.min.css'))
            .pipe(gulp.dest(path.build + 'css'));
    });

    gulp.task('build-js', ['clean-build-js'], function() {
        var b = browserify(path.app + 'js/app.js');
        var bundleStream = b.bundle();
        var gulpBrowserify = bundleStream.pipe(source('app.js'));

        return gulpBrowserify
            //.pipe(streamify(uglify({ mangle: true })))
            .pipe(gulp.dest(path.build + 'js'));
    });

    gulp.task('build-fonts', ['clean-build-fonts'], function() {
        return gulp.src(path.app + path.fonts)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build + 'fonts'));
    });

    gulp.task('build-less', ['clean-build-less'], function() {
        return gulp.src(path.app + path.less)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build + 'less'));
    });

    gulp.task('build-partials', ['clean-build-partials'], function() {
        return gulp.src(path.app + path.partials)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build + 'partials'));
    });

    gulp.task('build-root', ['clean-build-root'], function() {
        return gulp.src(path.app + '*.*')
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build));
    });


    /**
     Connect
     */
    gulp.task('connect-dev', function() {
        return gulp.src('build')
            .pipe(webserver({
                root: ['.'],
                livereload: true
            }));
    });

    gulp.task('connect-prod', function() {
        return gulp.src('build')
            .pipe(webserver({
                port: 80,
                fallback: 'index.html'
            }));
    });


    /**
     Open
     */
    gulp.task('open', function() {
        gulp.src(pkg.main)
            .pipe(open("", { url: 'http://localhost:8000' }));
    });


    /**
     Default
     */
    gulp.task('default', function() {
        runSequence(
            'build',
            'connect-dev',
            'watch'
        )
    });

    /**
     Watch
     */
    gulp.task('watch', function() {
        gulp.watch([ './app/js/**/*.*', './gulpfile.js' ], ['build-js']);
    });

}());
