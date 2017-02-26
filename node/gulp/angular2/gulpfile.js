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
    webpack = require('gulp-webpack'),
    connect = require('gulp-connect'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript'),
    tscConfig = require('./tsconfig.json'),
    origin = "source",
    project = "build";

require('gulp-stats')(gulp);

gulp.task('clean',()=>{
    return gulp.src(`${project}`,{read: true})
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
    return gulp.src(`${origin}/sass/**/*.{scss,sass.css}`)
    .pipe(newer(`${origin}/sass/**/*.{scss,sass,css}`))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(cssmin())
    .pipe(gulp.dest(`${project}/css`))
    .pipe(connect.reload());
});

// TypeScript compile
gulp.task('compile', function () {
  return gulp.src('./${origin}/app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${project}/app`))
});

gulp.task('js',()=>{
    return gulp.src(`./${origin}/js/**/*.{js}`)
    .pipe(webpack({
        entry : {
            index : [`./${origin}/js/index.js`]
        },
        output : {
            path: `${__dirname}/${project}/js`, // 번들 파일 폴더
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
                        presets: ['es2015']
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
    .pipe(gulp.dest(`${project}/js`))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: `${project}`,
        port: 52273,
        livereload: true
    });
});

gulp.task('watch', ()=>{
    gulp.watch(`${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`,['images'])
    gulp.watch(`${origin}/js/**/*.{js}`,['js'])
    gulp.watch(`${origin}/**/*.html`,['html'])
    gulp.watch(`${origin}/sass/**/*.{scss,sass.css}`,['css']);
});

gulp.task('default',['html','css','images','js']);
gulp.task('serve',['connect','watch']);

