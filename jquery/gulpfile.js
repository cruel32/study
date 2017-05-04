const gulp = require('gulp'),
    clean = require('gulp-clean'),
    newer = require('gulp-newer'),
    fileinclude = require('gulp-file-include'),
    htmlhint = require("gulp-htmlhint"),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    cssmin = require('gulp-cssmin'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    minify = require('gulp-minify'),
    origin = "source",
    project = "build";

require('gulp-stats')(gulp);

gulp.task('clean',()=>{
    return gulp.src(`${project}`,{read: false})
    .pipe(clean());
});

gulp.task('js',()=>{
    return gulp.src(`./${origin}/js/**/*.js`)
    .pipe(newer(`./${origin}/app/**/*.{js}`))
    .pipe(jshint())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest(`${project}/js`))
    .pipe(connect.reload());
});

gulp.task('images',()=>{
    return gulp.src(`${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`)
    .pipe(newer(`${project}/images/**/*.{gif,jpeg,jpg,png,svg}`))
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


gulp.task('connect', function() {
    connect.server({
        root: `${project}`,
        port: 5000,
        livereload: true
    });
});

gulp.task('watch', ()=>{
    gulp.watch(`${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`,['images'])
    gulp.watch(`${origin}/js/**/*.js`,['js'])
    gulp.watch(`${origin}/html/**/*.html`,['html'])
    gulp.watch(`${origin}/sass/**/*.{scss,sass.css}`,['css']);
});

gulp.task('default',['html','css','js','images']);
gulp.task('serve',['connect','watch']);

