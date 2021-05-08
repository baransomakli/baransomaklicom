const browserSync = require('browser-sync');
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

class NunjucksTask {
  constructor(src, path, dest) {
    return gulp.task('nunjucks', () => {
      return gulp
        .src(src)
        .pipe(
          nunjucksRender({
            path: [path]
          })
        )
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({ stream: true }));
    });
  }
}

exports.module = NunjucksTask;
