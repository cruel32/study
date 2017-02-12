const gulp = require('gulp'),
    clean = require('gulp-clean'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    fileinclude = require('gulp-file-include'),
    htmlhint = require("gulp-htmlhint"),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    cssmin = require('gulp-cssmin'),
    jshint = require('gulp-jshint'),
    webpack = require('gulp-webpack'),
    connect = require('gulp-connect'),

    origin = "source",
    project = "build";

require('gulp-stats')(gulp);

gulp.task('clean',()=>{
    return gulp.src(`${project}/**/*.*`,{read: false})
    .pipe(clean());
});

gulp.task('images',()=>{
    return gulp.src(`${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`)
    .pipe(newer(`${project}/images/**/*.{gif,jpeg,jpg,png,svg}`))
    .pipe(imagemin())
    .pipe(gulp.dest(`${project}/images`))
    .pipe(connect.reload());
});

gulp.task('html',()=>{
    gulp.src(`${origin}/html/**/*.html`)
    .pipe(newer(`${origin}/html/**/*.html`))
    .pipe(fileinclude({
        prefix: '@@',
        basepath: `${origin}/include`,
        context: {
            name: 'example'
        }
    }))
    .pipe(htmlhint('hint/.htmlhintrc'))
    .pipe(gulp.dest(`${project}/html`))
    .pipe(connect.reload());
});

gulp.task('css',()=>{
    return gulp.src(`${origin}/sass/**/*.{scss,sass}`)
    .pipe(newer(`${origin}/sass/**/*.{scss,sass}`))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(cssmin())
    .pipe(gulp.dest(`${project}/css`))
    .pipe(connect.reload());
});

gulp.task('js',()=>{
    return gulp.src(`./${origin}/app/**/*.{js,jsx}`)
    .pipe(newer(`./${origin}/app/**/*.{js,jsx}`))
    .pipe(jshint())
    .pipe(webpack({
        entry : { // 엔트리 파일 목록
            snapterest : `./${origin}/app/app.js`
        },
        output : {
            path: `${__dirname}/${project}/app`, // 번들 파일 폴더
            filename: '[name].js' // 번들 파일 이름 규칙
        },
        module : {
            loaders : [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015','react']
                    }
                }
            ]
        },
        devtool: '#inline-source-map'
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({
        //         warnings : false
        //     })
        // ]
    }))
    .pipe(gulp.dest(`${project}/app`))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: `${project}`,
        port: 52273,
        livereload: true,
        host : `localhost`
    });
});

gulp.task('watch', ()=>{
    gulp.watch(`${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`,['images']);
    gulp.watch(`${origin}/app/**/*.{js,jsx}`,['js']);
    gulp.watch(`${origin}/**/*.html`,['html']);
    gulp.watch(`${origin}/sass/**/*.{scss,sass}`,['css']);
});

gulp.task('default',['clean','html','css','js','images']);
gulp.task('serve',['connect','watch']);

