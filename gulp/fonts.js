const gulp = require('gulp');
const changed = require('gulp-changed');
const woff = require('gulp-ttf2woff');
const woff2 = require('gulp-ttftowoff2');

module.exports = function fonts(done) {
  gulp.src('src/fonts/*.ttf')
    .pipe(changed('build/fonts', {
      extension: '.woff2',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(woff2())
    .pipe(gulp.dest('build/fonts'))

  gulp.src('src/fonts/*.ttf')
    .pipe(changed('build/fonts', {
      extension: 'woff',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(woff())
    .pipe(gulp.dest('build/fonts'))
  done();
}
