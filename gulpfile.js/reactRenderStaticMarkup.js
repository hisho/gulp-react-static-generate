const gulp = require('gulp');
const ts = require('gulp-typescript');
const path = require('path');

const tsProject = ts.createProject(path.resolve(process.cwd(),'tsconfig.json'));

reactRenderStaticMarkup = (done) => {
  gulp
    .src('src/pages/**/*.tsx')
    .pipe(tsProject())
    .pipe(gulp.dest('dist'))
  done();
}

module.exports = reactRenderStaticMarkup;