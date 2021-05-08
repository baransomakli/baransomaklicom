const browserSync = require('browser-sync');
const gulp = require('gulp');

class ReloadTask {
  constructor() {
    return gulp.task('reload', () => browserSync.reload());
  }
}

exports.module = ReloadTask;
