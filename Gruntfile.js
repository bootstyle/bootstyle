module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                base: '.',
            },
            dev: {
                options: {
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
                cwd: 'node_modules',
                src: [ '*/{lib,bin}/*.js' ],
                dest: 'build',
                flatten: true,
                expand: true
            },
        },
        clean: {
            build: {
                src: [ 'build' ]
            },
        },
        uglify: {
            bootstyle: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: [ 'js/bootstyle/*.js' ],
                    dest: 'js/<%= pkg.name %>.min.js'
                }
            }
        },
        watch: {
            files: ['js/*.js', 'js/vendor/*.js'],
            tasks: ['jshint'],
            options: {
                cwd: '.',
                atBegin: false,
                spawn: false,
                event: ['all'],
                reload: true,
                livereload: 35729,
                livereloadOnError: true,
            },
        },
        browserifyBower: {
            options: {
                // Task-specific options go here.
            },
            your_target: {
                // Target-specific file lists and/or options go here.
            },
        },
        browserify: {
            bundleOptions: {
                debug: true
            },
            dist: {
                options: {
                    transform: [ "browserify-shim" ],
                },
                files: {
                    'dist/js/app.js': [ 'app.js' ]
                },
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
                copyOptions: {
                }
            },
            fonts: {
                options: {
                    destPrefix: 'dist/fonts',
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
                    destPrefix: 'dist/css',
                },
                files: {
                    "codemirror.css": "codemirror/lib/codemirror.css",
                    "codemirror-theme-ambiance.css": "codemirror/theme/ambiance.css",
                    "font-awesome.css": "fontawesome/css/font-awesome.css",
                    "spectrum.css": "spectrum/spectrum.css",
                }
            },
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
        'Copies and processes all our assets.',
        [ 'bowercopy', 'browserify:dist' ]
    );

    grunt.registerTask(
        'serve',
        'Runs the dev server.',
        [ 'connect:dev', 'watch' ]
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
        'Setup Bootstyle locally.',
        [ 'npm_install', 'bower_install' ]
    );
};
