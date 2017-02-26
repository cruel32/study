# gulp-angular2

Angular2 plugin for [Gulp](https://github.com/gulpjs/gulp).

# Install

```
npm install gulp-angular2 --save-dev
```

# Basic Usage

How to compile your Angular2 app:

```javascript
'use strict';

var gulp = require('gulp');
var angular2 = require('gulp-angular2');

gulp.task('angular2app', function () {
  return gulp.src('./src/app/main.js')
    .pipe(angular2())
    .pipe(gulp.dest('./public/app'));
});
```
