(function() {
    'use strict';

    var browserify = require('browserify');
    var source = require('vinyl-source-stream'); // makes non-gulp pipelines (browserify, etc) gulp compatible: https://github.com/hughsk/vinyl-source-stream
    var del = require('del');
    var runSequence = require('run-sequence');

    var gulp = require('gulp');
    var mainBowerFiles = require('main-bower-files');
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
        var js_reg = new RegExp('\.js$');
        var css_reg = new RegExp('\.css$');
        var font_reg = new RegExp('\.otf$|\.eot$|\.svg$|\.ttf$|\.woff$');

        // css
        gulp.src(mainBowerFiles({filter: css_reg }), { base: path.bower_components })
            .pipe(flatten())
            .pipe(gulp.dest(path.app_bower + 'css'));

        // js
        gulp.src(mainBowerFiles({filter: js_reg }), { base: path.bower_components })
            .pipe(flatten())
            .pipe(gulp.dest(path.app_bower + 'js'));

        // font
        gulp.src(mainBowerFiles({filter: font_reg }), { base: path.bower_components })
            .pipe(flatten())
            .pipe(gulp.dest(path.app_bower + 'fonts'));

        // bootstrap less
        gulp.src(path.bower_components + 'bootstrap/less/**/*.*')
            .pipe(gulp.dest(path.app_bower + 'less/bootstrap'));
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
        gulp.src([path.app + path.css])
            .pipe(watch())
            .pipe(plumber())
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            .pipe(gulp.dest(path.build + 'css'));

        gulp.src([path.app_bower + path.css])
            .pipe(watch())
            .pipe(plumber())
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            .pipe(gulp.dest(path.build_bower + 'css'));
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
        gulp.src(path.app + path.fonts)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build + 'fonts'));

        gulp.src(path.app_bower + path.fonts)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build_bower + 'fonts'));
    });

    gulp.task('build-less', ['clean-build-less'], function() {
        gulp.src(path.app + path.less)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build + 'less'));

        gulp.src(path.app_bower + path.less)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build_bower + 'less'));
    });

    gulp.task('build-partials', ['clean-build-partials'], function() {
        gulp.src(path.app + path.partials)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build + 'partials'));

        gulp.src(path.app_bower + path.partials)
            .pipe(watch())
            .pipe(plumber())
            .pipe(gulp.dest(path.build_bower + 'partials'));
    });

    gulp.task('build-root', ['clean-build-root'], function() {
        gulp.src(path.app + '*.*')
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
