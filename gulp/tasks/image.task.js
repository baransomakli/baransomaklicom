const browserSync = require('browser-sync');
const gulp = require('gulp');

class ImageTask {
  constructor(src, dest) {
    return gulp.task('image', () => {
      return gulp.src(src)
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({ stream: true }));
    });
  }
}

exports.module = ImageTask;
