const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const gulp = require('gulp');
const header = require('gulp-header');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');

class JavaScriptTask {
  lib(srcs = [], dest) {
    return gulp.task('js-lib', () => {
      return gulp
        .src(srcs)
        .pipe(header('\ufeff'))
        .pipe(
          plumber({
            errorHandler: function (error) {
              console.log(error.message);
              this.emit('end');
            },
          }),
        )
        .pipe(concat(`lib.min.js`))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
    });
  }

  core(srcs = [], dest) {
    return gulp.task('js-core', () => {
      return gulp
        .src(srcs)
        .pipe(header('\ufeff'))
        .pipe(
          plumber({
            errorHandler: function (error) {
              console.log(error.message);
              this.emit('end');
            },
          }),
        )
        .pipe(
          babel({
            presets: [
              [
                '@babel/env',
                {
                  modules: false,
                },
              ],
            ],
          }),
        )
        .pipe(concat('core.min.js'))
        .pipe(
          uglify({
            output: {
              beautify: false,
              comments: true,
            },
          }),
        )
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({ stream: true }));
    });
  }
}

exports.module = JavaScriptTask;
