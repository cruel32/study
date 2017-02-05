module.exports = (grunt)=>{
    require("time-grunt")(grunt);
    require("jit-grunt")(grunt);
    // 가) 프로젝트 환경설정.
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        includes: {
            dist: {
                expand: true,
                cwd: 'project/',
                src: ['html/**/*.html'],
                dest: 'dest',
                options: {
                    flatten : true,
                    includePath : 'project/include/',
                    includeRegexp : /^(\s*)##include\s+"(\S+)"\s*$/
                }
            }
        },
        htmlhint : {
            options : {
                htmlhintrc : "hint/.htmlhintrc"
            },
            dist : [
                "dest/**/*.html"
            ]
        }
    });

    // 나) 플러그인 로드.
    //grunt.loadNpmTasks('grunt-includes');

    // 다) task 실행.
    /* 
    grunt.registerTask('serve', (target)=>{
        if (target === 'dist') {
            return grunt.task.run(['connect', 'watch']);
        }
        grunt.task.run([
            'default',
            'connect',
            'watch'
        ]);

    });
    */
    grunt.registerTask('default', [
        "includes",
        "htmlhint"
    ]);
    
}