module.exports = (grunt)=>{
    `use strict`;
    let origin = "origin";
    let project = "project";

    require(`time-grunt`)(grunt);
    require(`jit-grunt`)(grunt);

    // 가) 프로젝트 환경설정.
    grunt.initConfig({
        pkg : grunt.file.readJSON(`package.json`),
        includes: {
            dist : {//distribute
                expand : true,
                cwd : `${origin}/`,
                src : [`html/**/*.html`],
                dest : `${project}`, //destination
                options : {
                    flatten : true,
                    includePath : `${origin}/include/`,
                    includeRegexp : /^(\s*)##include\s+"(\S+)"\s*$/
                }
            }
        },
        htmlhint : {
            options : {
                htmlhintrc : `hint/.htmlhintrc`
            },
            dist : [
                `${project}/**/*.html`
            ]
        },
        // CSS를 만듭니다.
        sass : {
            options : {
                sourceComments : false,
                sourceMap : false,//true,
                outputStyle : `expanded` //nested, expanded, compact, compressed
            },
            dist : {
                expand : true,
                cwd : `${origin}/sass`,
                src : [`**/*.{sass,scss}`],
                dest : `${project}/css/`,
                ext : `.min.css`
            }
        },
        // 벤더프리픽스를 추가합니다.
        postcss: {
            options: {
                processors: [
                    require(`autoprefixer`)({
                        browsers: [
                            `Android 2.3`,
                            `Android >= 4`,
                            `Chrome >= 20`,
                            `Firefox >= 24`,
                            `Explorer >= 8`,
                            `iOS >= 6`,
                            `Opera >= 12`,
                            `Safari >= 6`
                        ]
                    })
                ]
            },
            dist: {
                src: `${project}/css/*.css`,
            }
        },
        // css 의 속성을 정렬해줍니다.
        csscomb : {
            options : {
                config : `hint/.csscomb.json`
            },
            dist : {
                expand: true,
                cwd : `${project}/css/`,
                src : `**/*.min.css`,
                dest : `${project}/css/`
            }
        },
        // css 를 압축합니다.
        cssmin: {
            options : {
                // noAdvanced: true
                compatibility : `ie9`,
                keepSpecialComments : `*`,
                sourceMap : false, //true,
                advanced : false
            },
            dist: {
                files : [{
                    expand : true,
                    cwd : `${project}/css/`,
                    src : [`**/*.css`, `**/!*.min.css`],
                    dest : `${project}/css/`,
                    ext : `.min.css`
                }]
            }
        },
        // 자바스크립트 구문검사를 합니다.
        jshint : {
            options: {
                jshintrc : `hint/.jshintrc`,
                force : true,
                // force: true, // error 검출시 task를 fail 시키지 않고 계속 진단
                reporter : require(`jshint-stylish`) // output을 수정 할 수 있는 옵션
            },
            grunt : {
                src : [`Gruntfile.js`]
            },
            dist : {
                src : `${origin}/js/**/*.js`
            }
        },
        // 파일을 합칩니다.
        concat : {
            options : {
                banner : `/*! <%= pkg.name %> - v<%= pkg.version %> - ` +
                `<%= grunt.template.today("yyyy-mm-dd") %> */`
            },
            dist : {
                src : `${origin}/js/*.js`,
                dest : `${project}/js/default.min.js`
            }
        },

        // 압축합니다.
        uglify : {
            options : {
                banner : `/*! <%= pkg.name %> - v<%= pkg.version %> - ` +
                `<%= grunt.template.today("yyyy-mm-dd") %> */`
            },
            dist : {
                src : `${project}/js/default.min.js`,
                dest : `${project}/js/default.min.js`
            }
        },

        // 폴더 및 파일을 삭제합니다.
        clean : {
            dist : {
                files : [{
                    src : `${project}`
                }]
            },
        },

        // 폴더 및 파일을 복사합니다.
        copy : {
            dist : {
                files : [ 
                    //fonts
                    {
                        expand: true,
                        cwd: `${origin}/fonts/`,
                        src: `**`,
                        dest: `${project}/fonts/`
                    }
                ]
            }
        },

        // 이미지를 최적화 합니다.
        // imagemin : {
        //     options : {
        //         optimizationLevel : 7
        //     },
        //     dist : {
        //         files : [{
        //             expand : true,
        //             cwd : `${origin}/images/`,
        //             src : `**/*.{png,jpeg,jpg,gif}`,
        //             dest : `${project}/images/**/`
        //         }]
        //     }
        // },

        //이미지를 최적화 합니다.
        image: {
            options: {
                pngquant: true,
                optipng: false,
                zopflipng: true,
                jpegRecompress: false,
                jpegoptim: true,
                mozjpeg: true,
                gifsicle: true,
                svgo: true
            },
            files: {
                expand: true,
                cwd:  `${origin}/images/`,
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: `${project}/images/`
            }
        },

        // 감시를 합니다.
        watch : {
            options : { livereload: true },
            gruntfile : {
                files : [`Gruntfile.js`],
                tasks : [`newer:jshint:grunt`]
            },
            html : {
                files : [`${origin}/**/*.html`],
                tasks : [`newer:includes`,`htmlhint`]
            },
            sass : {
                files : [`${origin}/sass/**/*.{sass,scss}`],
                tasks : [`newer:sass`,`postcss`,`csscomb`,`cssmin`]
            },
            js : {
                files : [`${origin}/js/**/*.js`],
                tasks : [`newer:jshint`,`concat`,`uglify`]
            },
            img : {
                files : [`${origin}/images/**/*.{gif,jpeg,jpg,png}`],
                tasks : [`newer:image`]
            }
            
            //fonts : {
            //    files : [`${origin}/fonts/**/*`],
            //    tasks : [`newer:copy`]
            //}
        },

        // 병렬로 작업을 실행합니다.
        concurrent : {
            options : {
                logConcurrentOutput : true
            },
            dist : [
                `copy`,
                `image`
            ]
        },

        // 서버를 열어서 브라우져에서 확인합니다.
        connect : {
            server : {
                options : {
                    port : 52273,
                    hostname : `localhost`,
                    livereload : 35729,
                    // keepalive: true,
                    base : `${project}`,
                    open : `http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>/html/index.html`
                }
            }
        },
    });

    // 나) 플러그인 로드.
    //grunt.loadNpmTasks(`grunt-includes`);

    // 다) task 실행.
    /* 
    grunt.registerTask(`serve`, (target)=>{
        if (target === `dist`) {
            return grunt.task.run([`connect`, `watch`]);
        }
        grunt.task.run([
            `default`,
            `connect`,
            `watch`
        ]);

    });
    */
    
    
    // 작업을 로드합니다.
    // grunt.loadNpmTasks(`grunt-contrib-jshint`);

    grunt.registerTask(`serve`, (target)=>{
        grunt.task.run([`connect`, `watch`]);
        /*
        if (target === origin) {
            return grunt.task.run([`connect`, `watch`]);
        }

        grunt.task.run([
            `default`,
            `connect`,
            `watch`
        ]);
        */
    });

    // html task
    grunt.registerTask(`html`, [
            `includes`,
            `htmlhint`
        ]
    );

    // css task
    grunt.registerTask(`css`, [
            // `clean`,
            `sass`,
            `postcss`,
            `csscomb`,
            `cssmin`
        ]
    );

    // javascript task
    grunt.registerTask(`jsnt`, [
            `jshint`,
            `concat`,
            `uglify`
        ]
    );

    grunt.registerTask(`default`, [
        `clean`,
        `html`,
        `css`,
        `jsnt`,
        `concurrent`
    ]);
    
}