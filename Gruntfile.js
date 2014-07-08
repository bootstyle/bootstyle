module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            dev: {
                options: {
                    base: './build/',
                    port: 35729,
                    protocol: 'http',
                    hostname: '*',
                    keepalive: true,
                    debug: true,
                    //livereload: true,
                    open: false,
                    useAvailablePort: false,
                    onCreateServer: function(server, connect, options) {
                    },
                    middleware: function(connect, options, middlewares) {

                        // Must be the first middle-ware in the array, per the docs
                        middlewares.push(function(connect) {
                            require('connect-livereload')({
                                port: 35729
                            });
                        });

                        return middlewares;
                    }
                }
            }
        },
        copy: {
            build: {
                files: [
                    { expand: true, cwd: 'app/',            src: ['*'],     dest: 'build/',         filter: 'isFile' },
                    { expand: true, cwd: 'app/css/',        src: ['**'],    dest: 'build/css/' },
                    { expand: true, cwd: 'app/fonts/',      src: ['**'],    dest: 'build/fonts/' },
                    { expand: true, cwd: 'app/less/',       src: ['**'],    dest: 'build/less/' },
                    { expand: true, cwd: 'app/partials/',   src: ['**'],    dest: 'build/partials/' },
                ]
            },
            app: {
                files: []
            }
        },
        clean: {
            build: {
                src: [ 'build' ]
            },
            app_js_bower: {
                src: [ 'app/js/bower' ]
            }
        },
        uglify: {
            build: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    compress: {
                        drop_console: true
                    },
                    mangle: true
                },
                src: [ 'build/js/app.js' ],
                dest: 'build/js/app.js'
            }
        },
        watch: {
            files: [ '' ],
            tasks: [ '' ],
            options: {
                cwd: '.',
                atBegin: false,
                spawn: false,
                event: ['all'],
                reload: true,
                livereload: 35729,
                livereloadOnError: true
            }
        },
        browserify: {
            build: {
                bundleOptions: {
                    debug: true
                },
                files: {
                    'build/js/app.js': [ 'app/js/app.js' ]
                }
            }
        },
        "bower-install-simple": {
            options: {
                color: true,
                production: false,
                directory: "bower_components"
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components',
                runBower: false,
                report: true,
                clean: false,
                ignore: [],
                copyOptions: {}
            },
            fonts: {
                options: {
                    destPrefix: 'app/fonts',
                },
                files: {
                    "FontAwesome.otf": "fontawesome/fonts/FontAwesome.otf",
                    "fontawesome-webfont.eot": "fontawesome/fonts/fontawesome-webfont.eot",
                    "fontawesome-webfont.svg": "fontawesome/fonts/fontawesome-webfont.svg",
                    "fontawesome-webfont.ttf": "fontawesome/fonts/fontawesome-webfont.ttf",
                    "fontawesome-webfont.woff": "fontawesome/fonts/fontawesome-webfont.woff",
                    "glyphicons-halflings-regular.eot": "bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                    "glyphicons-halflings-regular.svg": "bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
                    "glyphicons-halflings-regular.ttf": "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                    "glyphicons-halflings-regular.woff": "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                }
            },
            css: {
                options: {
                    destPrefix: 'app/css',
                },
                files: {
                    "codemirror.css": "codemirror/lib/codemirror.css",
                    "codemirror-theme-ambiance.css": "codemirror/theme/ambiance.css",
                    "font-awesome.css": "fontawesome/css/font-awesome.css",
                    "spectrum.css": "spectrum/spectrum.css",
                }
            },
            less: {
                options: {
                    srcPrefix: 'bower_components/bootstrap/less/'
                },
                src: "*",
                dest: 'app/less/bootstrap/'
            },
            js: {
                options: {
                    destPrefix: 'app/js/bower/',
                },
                files: {
                    "angular/angular.js": "angular/angular.js",
                    "angular-sanitize/angular-sanitize.js": "angular-sanitize/angular-sanitize.js",
                    "angular-touch/angular-touch.js": "angular-touch/angular-touch.js",
                    "angular-spectrum-colorpicker/angular-spectrum-colorpicker.js": "angular-spectrum-colorpicker/dist/angular-spectrum-colorpicker.js",
                    "angular-carousel/angular-carousel.js": "angular-carousel/dist/angular-carousel.js",
                    "bootstrap/bootstrap.js": "bootstrap/dist/js/bootstrap.js",
                    "codemirror/codemirror.js": "codemirror/lib/codemirror.js",
                    "codemirror-mode-css/codemirror-mode-css.js": "codemirror/mode/css/css.js",
                    "codemirror-mode-htmlmixed/codemirror-mode-htmlmixed.js": "codemirror/mode/htmlmixed/htmlmixed.js",
                    "codemirror-mode-javascript/codemirror-mode-javascript.js": "codemirror/mode/javascript/javascript.js",
                    "codemirror-mode-xml/codemirror-mode-xml.js": "codemirror/mode/xml/xml.js",
                    "FileSaver/FileSaver.js": "FileSaver/FileSaver.js",
                    "jquery/jquery.js": "jquery/dist/jquery.js",
                    "modernizr/modernizr.js": "modernizr/modernizr.js",
                    "spectrum/spectrum.js": "spectrum/spectrum.js",
                    "tinycolor/tinycolor.js": "tinycolor/tinycolor.js",
                }
            }
        },
    });

    // load all grunt tasks
    // https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-tasks')(grunt, {
        pattern: 'grunt-*',
        config: 'package.json',
        scope: ['devDependencies', 'dependencies']
    });

    // define tasks
    grunt.registerTask(
        'build',
        'Cleans out the build, updates app bower components, copies and browserifies app assets into build.',
        [ 'clean:build', 'clean:app_js_bower', 'bowercopy', 'copy:build', 'browserify:build' ]
    );

    grunt.registerTask(
        'serve',
        'Runs the dev server.',
        [ 'connect:dev' ]
    );

    // dependencies
    grunt.registerTask(
        'bower_install',
        'Installs bower.json dependencies.',
        [ 'bower-install-simple' ]
    );

    grunt.registerTask(
        'npm_install',
        'Installs package.json dependencies.',
        [ 'npm-install' ]
    );

    grunt.registerTask(
        'install_dependencies',
        'Installs bower and npm dependencies.',
        [ 'npm_install', 'bower_install' ]
    );

    grunt.registerTask(
        'setup',
        'Setup Bootstyle locally (installs dependencies, and creates a build).',
        [ 'npm_install', 'bower_install', 'build' ]
    );
};
