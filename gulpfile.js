'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', ()=> {
  gulp.src('*.scss')
    .pipe(sass())
    .pipe(gulp.dest( (f)=> {
      return f.base;
    }));
});

gulp.task('hello', ()=> {
  console.log( "hello!");
});

gulp.task('default',['sass'], ()=> {
  gulp.watch('*.scss', ['sass']);
});