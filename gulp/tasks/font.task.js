const browserSync = require('browser-sync');
const gulp = require('gulp');

class FontTask {
  constructor(src, dest) {
    return gulp.task('font', () => {
      return gulp.src(src)
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({ stream: true }));
    });
  }
}

exports.module = FontTask;
