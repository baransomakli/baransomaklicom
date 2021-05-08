const browserSync = require('browser-sync');
const gulp = require('gulp');

class BrowserSyncTask {
  constructor(options) {
    return gulp.task('browser-sync', () => {
      browserSync.init(options);
    });
  }
}

exports.module = BrowserSyncTask;
