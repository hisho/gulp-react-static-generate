const gulp = require('gulp');
const ts = require('gulp-typescript');
const path = require('path');
const through = require("through2");
const gutil = require('gulp-util');

const tsProject = ts.createProject(path.resolve(process.cwd(), 'tsconfig.json'));

reactRenderStaticMarkup = (done) => {
  gulp
    .src('src/pages/**/*.tsx')
    .pipe(tsProject())
    .pipe(through.obj((file, _, callback) => {
      //何かしらのプラグインがファイルの中身を stream にして次に渡して来た時
      if (file.isStream()) {
        callback(new gutil.PluginError('react render static', 'Streams not supported'));
        return callback(null, file);
      }

      //ファイルの中身がBufferとしてわたってきた場合
      if (file.isBuffer()) {
        try {
          //現在処理しているfileのpath
          const modulePath = path.resolve(process.cwd(), file.path);
          //現在処理しているfileのext(拡張子)
          const moduleExt = path.extname(modulePath);

          //拡張子を.htmlに変換する
          file.path = file.path.replace(new RegExp(`${moduleExt}$`), '.html');

          //変換後のfileを返す
          return callback(null, file);

          //エラーの処理
        } catch (e) {
          console.error("ERROR RENDERING TSX PAGE: ", e.stack);
          return callback(null, file);
        }
      }
    }))
    .pipe(gulp.dest('dist'))
  done();
}

module.exports = reactRenderStaticMarkup;