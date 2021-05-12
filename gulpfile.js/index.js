const gulp = require('gulp');

const reactRenderStaticMarkup = require('./reactRenderStaticMarkup');

exports.renderReact = reactRenderStaticMarkup;
exports.watch = () => {
  gulp.watch('src/pages/**/*.tsx', reactRenderStaticMarkup);
}