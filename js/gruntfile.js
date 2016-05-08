module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/tasks/*.js'],
                dest: 'dist/scripts/script.main.min.js'
            },
            libs: {
                src: ['js/libs/jquery-1.12.1.min.js','js/libs/*.js'],
                dest: 'dist/scripts/libs.min.js'
            },
            css: {
                src: ['css/**/*.css'],
                dest: 'dist/styles/styles.min.css'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/scripts/script.main.min.js': ['dist/scripts/script.main.min.js'],
                    'dist/scripts/libs.min.js': ['dist/scripts/libs.min.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles/styles.min.css': ['dist/styles/styles.min.css']
                }
            }
        },
        watch: {
            files: ['**/*'],
            tasks: ['concat', 'uglify', 'cssmin']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};