(function() {
    'use strict';

    var config = require('./build.config.json');
    var pkg = require('./package.json');

    var browserify = require('browserify');
    var merge = require('merge-stream');
    var source = require('vinyl-source-stream');
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
    var gutil = require('gulp-util');


    /**
     Clean
     */

    // app
    gulp.task('clean-app-bower', function() {
        del.sync([config.app_dir + '**/bower/**']);
    });

    // build
    gulp.task('clean-build', function() {
        del.sync([config.build_dir]);
    });

    gulp.task('clean-build-css', function() {
        del.sync([config.build_dir + '**/css/**']);
    });

    gulp.task('clean-build-fonts', function() {
        del.sync([config.build_dir + '**/fonts/**']);
    });

    gulp.task('clean-build-js', function() {
        del.sync([config.build_dir + '**/js/**']);
    });

    gulp.task('clean-build-less', function() {
        del.sync([config.build_dir + '**/less/**']);
    });

    gulp.task('clean-build-partials', function() {
        del.sync([config.build_dir + '**/partials/**']);
    });

    gulp.task('clean-build-root', function() {
        del.sync([config.build_dir + '**/*.*']);
    });


    /**
     Copy Bower Components
     */
    gulp.task('copy-bower', ['clean-app-bower'], function(cb) {
        var cssFilter = gulpFilter('**/*.css');
        var fontFilter = gulpFilter([ '**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff' ]);
        var jsFilter = gulpFilter('**/*.js');
        var bootstrapLessFilter = gulpFilter('bootstrap/**/*.less');

        gulpBowerFiles()
            .pipe(cssFilter)
            .pipe(flatten())
            .pipe(gulp.dest(config.app_dir + 'css/bower'))
            .pipe(cssFilter.restore())

            .pipe(fontFilter)
            .pipe(flatten())
            .pipe(gulp.dest(config.app_dir + 'fonts/bower'))
            .pipe(fontFilter.restore())

            .pipe(jsFilter)
            .pipe(flatten())
            .pipe(gulp.dest(config.app_dir + 'js/bower'))
            .pipe(jsFilter.restore())

            .pipe(bootstrapLessFilter)
            .pipe(flatten())
            .pipe(gulp.dest(config.app_dir + 'less/bower/bootstrap'));

        console.error('\n    !!!! Fix gulpBowerFiles setTimeout Hack !!!!\n');
        // TODO: fix this hack!  This task is not running synchronously, therefore build js tries to run before copy is done, is it a proper stream?
        setTimeout(function() {
            cb(null);
        }, 1000);

    });


    /**
     Build
     */
    gulp.task('build', function() {
        runSequence(
            'copy-bower',
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
        return gulp.src(config.app_dir + 'css/**/*.css')
            .pipe(minifyCSS({ keepSpecialComments: 0 }))
            //.pipe(concat(pkg.name.toLowerCase() + '.min.css'))
            .pipe(gulp.dest(config.build_dir + 'css'));
    });

    gulp.task('build-js', ['clean-build-js'], function() {
        return browserify(config.app_dir + 'js/app.js')
            .bundle()
            .pipe(source('app.js'))
            // Start piping stream to tasks!
            .pipe(gulp.dest(config.build_dir + 'js'));
    });

    gulp.task('build-fonts', ['clean-build-fonts'], function() {
        return gulp.src(config.app_dir + 'fonts/**/*.*')
            .pipe(gulp.dest(config.build_dir + 'fonts'));
    });

    gulp.task('build-less', ['clean-build-less'], function() {
        return gulp.src(config.app_dir + 'less/**/*.*')
            .pipe(gulp.dest(config.build_dir + 'less'));
    });

    gulp.task('build-partials', ['clean-build-partials'], function() {
        return gulp.src(config.app_dir + 'partials/**/*.*')
            .pipe(gulp.dest(config.build_dir + 'partials'));
    });

    gulp.task('build-root', ['clean-build-root'], function() {
        return gulp.src(config.app_dir + '*.*')
            .pipe(gulp.dest(config.build_dir));
    });


    /**
     Watch
     */
    gulp.task('watch', function() {
        gulp.watch(config.app_dir + 'css/**/*.css', ['build-css']);
        gulp.watch(config.app_dir + 'fonts/**/*.fonts', ['build-fonts']);
        gulp.watch(config.app_dir + 'js/**/*.js', ['build-js']);
        gulp.watch(config.app_dir + 'less/**/*.less', ['build-less']);
        gulp.watch(config.app_dir + 'partials/**/*.html', ['build-partials']);
        gulp.watch(config.app_dir + '*.*', ['build-root']);
        gulp.watch(config.bower_dir + '**', ['build']);
    });


    /**
     Default
     */
    gulp.task('default', function() {
        runSequence(
            'build',
            'watch'
        );
    });

}());
