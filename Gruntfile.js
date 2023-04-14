module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            dev:{
                files:{
                    './dev/styles/main.css' : './src/styles/main.less'
                }
            },
            build:{
                options: {
                    compress: true
                },
                files:{
                    './dist/styles/main.min.css' : './src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['./src/styles/*.less'],
                tasks: ['less:dev'],
            },
            html: {
                files: ['./index.html'],
                tasks: ['replace:dev'],
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_STYLESHEET',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'JS_FILE',
                            replacement: '../src/scripts/main.js'
                        }
                    ],
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src:    ['./index.html'],
                        dest:   'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_STYLESHEET',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'JS_FILE',
                            replacement: './scripts/main.min.js'
                        }
                    ],
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src:    ['./prebuild/index.html'],
                        dest:   'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                }, 
                files: {
                    'prebuild/index.html': 'index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target:{
                files: {
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        }
        
    })

    //Load NPM Task
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:build', 'htmlmin', 'replace:dist', 'clean', 'uglify']);
}