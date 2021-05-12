const gulp = require('gulp');

reactRenderStaticMarkup = (done) => {
  gulp
    .src('src/pages/**/*.tsx')
    .pipe(gulp.dest('dist'))
  done();
}

module.exports = reactRenderStaticMarkup;