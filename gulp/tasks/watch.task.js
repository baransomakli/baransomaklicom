const gulp = require('gulp');

class WatchTask {
  constructor() {
    return gulp.task('watch', () => {
      gulp.watch('views/**/*.+(html|nunjucks)', gulp.series('nunjucks'));
      gulp.watch('public/**/*.html');

      gulp.watch('src/sass/**/*.scss', gulp.series('sass-minified', 'sass-unminified'));

      gulp.watch('src/js/**/*.js', gulp.series('js-core'));

      gulp.watch('src/img/**/*', gulp.series('image'));

      gulp.watch('src/fonts/**/*', gulp.series('font'));
    });
  }
}

exports.module = WatchTask;
