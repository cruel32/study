const gulp = require('gulp'),
    clean = require('gulp-clean'),
    newer = require('gulp-newer'),
    fileinclude = require('gulp-file-include'),
    htmlhint = require("gulp-htmlhint"),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),  //3.0.2 이상으로 업데이트하지 말것
    cssmin = require('gulp-cssmin'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    minify = require('gulp-minify'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    origin = "source",
    project = "build";
    prefix = "/jqPlugin";

require('gulp-stats')(gulp);

gulp.task('clean', () => {
  return gulp.src(`${project}`, {
      read: false
    })
    .pipe(clean());
});

gulp.task('js', () => {
  return gulp.src(`./${origin}/js/**/*.js`)
    .pipe(newer(`./${origin}/js/**/*.js`))
    .pipe(jshint())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(minify({
      ext: {
        // src:'-debug.js',
        min: '.js'
      },
      // exclude: ['tasks'],
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest(`${project}${prefix}/js`))
    .pipe(connect.reload());
});

gulp.task('images', () => {
  return gulp.src([
      `${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`,
      `!${origin}/images/sprite/**/*.png`,
      `!${origin}/images/svg/**/*.svg`
    ])
    .pipe(newer(`${project}/images/**/*.{gif,jpeg,jpg,png,svg}`))
    .pipe(gulp.dest(`${project}${prefix}/images`))
    .pipe(connect.reload());
});

gulp.task('sprite', function() {
  let spriteData = gulp.src(`${origin}/images/sprite/*.png`).pipe(spritesmith({
    imgName: 'sprite.png', //이미지이름
    imgPath: `${prefix}/images/sprite/sprite.png`, //css 내에 생성되는 이미지 경로
    cssName: 'sprite.css', //css 이름
    cssOpts: {
      cssSelector(sprite) {
        return '.spr-' + sprite.name; //스프라이트 아이콘의 selector 이름
      }
    },
    padding: 10 //이미지간 padding
  }));

  let imgStream = spriteData.img
    .pipe(gulp.dest(`${project}${prefix}/images/sprite`));

  let cssStream = spriteData.css
    .pipe(csscomb())
    .pipe(cssmin())
    .pipe(gulp.dest(`${project}${prefix}/css`));

  return merge(imgStream, cssStream);
});

gulp.task('iconfont', function() {
  return gulp.src([`${origin}/images/svg/**/*.svg`])
    .pipe(iconfontCss({
        fontName : `awesome`,
        path: `${origin}/sass/_icons.css`, //css rules를 생성해줄 css 파일
        targetPath: `../css/_icons.css`, //css가 생성되는 경로. 근데 왜 경로가 dest 기준이냐
        fontPath: `${prefix}/fonts/` //css내에서 font의 경로를 잡아준다
    }))
    .pipe(iconfont({
        fontName: `awesome`,
        fontHeight : '1000',
        normalize: true
     }))
    .pipe(gulp.dest(`${project}${prefix}/fonts`));
});


gulp.task('html', () => {
  gulp.src([`${origin}/**/*.html`, `!${origin}/include/*.html`])
    .pipe(newer(`${origin}/**/*.html`))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: `${origin}/include`,
      context: {
        name: 'example'
      }
    }))
    .pipe(htmlhint('hint/.htmlhintrc'))
    .pipe(gulp.dest(`${project}${prefix}`))
    .pipe(connect.reload());
});

gulp.task('css', () => {
  return gulp.src(`${origin}/sass/**/*.{scss,sass.css}`)
    .pipe(newer(`${origin}/sass/**/*.{scss,sass,css}`))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csscomb({
        configPath: 'hint/.csscomb.json'
    }))
    // .pipe(cssmin())
    .pipe(gulp.dest(`${project}${prefix}/css`))
    .pipe(connect.reload());
});


gulp.task('connect', function() {
  connect.server({
    root: `${project}`,
    port: 5000,
    livereload: true
  });
});

gulp.task('watch', () => {
  gulp.watch(`${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`, ['images'])
  gulp.watch(`${origin}/images/sprite/**/*.png`, ['sprite'])
  gulp.watch(`${origin}/images/svg/**/*.svg`, ['iconfont'])
  gulp.watch(`${origin}/js/**/*.js`, ['js'])
  gulp.watch(`${origin}/html/**/*.html`, ['html'])
  gulp.watch(`${origin}/sass/**/*.{scss,sass.css}`, ['css']);
});

gulp.task('default', ['html', 'css', 'js', 'images', 'sprite', 'iconfont']);
gulp.task('serve', ['connect', 'watch']);