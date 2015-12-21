const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

const paths = {
  dist: 'dist',
  distFiles: 'dist/**/*',
  srcTsFiles: 'app/**/*.ts'
}

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del(paths.distFiles);
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src(paths.srcTsFiles)
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);
