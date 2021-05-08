const gulp = require('gulp');
const Utils = require('./gulp/utils').module;

// Import
const BrowserSync = require(new Utils().task('browser-sync')).module;
const Reload = require(new Utils().task('reload')).module;
const Nunjucks = require(new Utils().task('nunjucks')).module;
const Sass = require(new Utils().task('sass')).module;
const JS = require(new Utils().task('javascript')).module;
const Image = require(new Utils().task('image')).module;
const Font = require(new Utils().task('font')).module;
const Watch = require(new Utils().task('watch')).module;

// Tasks
new BrowserSync({
  server: {
    baseDir: 'public',
  },
});
new Reload();
new Nunjucks('views/pages/**/**.+(html|nunjucks)', 'views', 'public/');
new Sass().minified('src/sass/**/*.scss', 'main', 'public/dist/css/');
new Sass().unminified('src/sass/**/*.scss', 'main', 'public/dist/css/');
new JS().lib(
  [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    'src/js/plugins/masked-input.js',
  ],
  'public/dist/js/',
);
new JS().core(['src/js/index.js', 'src/js/components/**/*.js'], 'public/dist/js/');
new Image('src/img/*', 'public/dist/img');
new Font('src/fonts/*', 'public/dist/fonts');
new Watch();

let tasks = ['nunjucks', 'sass-minified', 'sass-unminified', 'js-core', 'js-lib', 'image', 'font'];

if (process.env.NODE_ENV !== 'production') {
  tasks = [...tasks, 'browser-sync', 'watch'];
}

// Run
gulp.task('default', gulp.parallel(...tasks));
