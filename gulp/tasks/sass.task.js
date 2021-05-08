const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const gulp = require('gulp');
const magicImporter = require('node-sass-magic-importer');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');

const NODE_ENV = process.env.NODE_ENV || 'development';

class SassTask {
  minified(src, fileName, dest) {
    return gulp.task('sass-minified', () => {
      return (
        gulp
          .src([src], { sourcemaps: true })
          .pipe(
            plumber({
              errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
              },
            }),
          )
          // .pipe(sourcemaps.init())
          .pipe(sass({ outputStyle: 'compressed', importer: magicImporter() }).on('error', sass.logError))
          // .pipe(sourcemaps.write('.'))
          .pipe(autoprefixer('last 2 versions'))
          .pipe(replace('/*!', '/*'))
          .pipe(concat(`${fileName}.min.css`))
          .pipe(gulp.dest(dest, { sourcemaps: NODE_ENV === 'production' ? false : '.' }))
          .pipe(browserSync.reload({ stream: true }))
      );
    });
  }

  unminified(src, fileName, dest) {
    return gulp.task('sass-unminified', () => {
      return (
        gulp
          .src([src], { sourcemaps: true })
          .pipe(
            plumber({
              errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
              },
            }),
          )
          // .pipe(sourcemaps.init())
          .pipe(sass({ importer: magicImporter() }).on('error', sass.logError))
          // .pipe(sourcemaps.write('.'))
          .pipe(autoprefixer('last 2 versions'))
          .pipe(replace('/*!', '/*'))
          .pipe(concat(`${fileName}.css`))
          .pipe(gulp.dest(dest, { sourcemaps: NODE_ENV === 'production' ? false : '.' }))
          .pipe(browserSync.reload({ stream: true }))
      );
    });
  }
}

exports.module = SassTask;
