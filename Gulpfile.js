require('babel/register');

const gulp = require("gulp"),
      babel = require("gulp-babel"),
      esdoc = require("gulp-esdoc"),
      eslint = require('gulp-eslint'),
      apidoc = require('gulp-apidoc'),
      del = require('del');

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('clean', () => {
    return del(['docs', 'dist', 'api']);
});

gulp.task('transpile', ['clean'], () => {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('apidoc', ['clean'], (done) => {
  apidoc({
    src: "src/",
    dest: "api/"
  }, done);
  gulp.src(["./api/**/*"], { base: './' }).pipe(gulp.dest('docs'));
});

gulp.task('document', ['clean'], () => {
  return gulp.src("./src")
    .pipe(esdoc({ destination: "./docs" }));
});

gulp.task('build', ['transpile', 'document', 'apidoc']);
gulp.task('default', ['lint', 'build']);
