module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [ 'node_modules/*/{lib,bin}/*.js' ],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // define tasks
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean', 'copy' ]
    );

    grunt.registerTask(
        'default',
        ['uglify']
    );
};
