'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default', function() {
    // place code for your default task here
    console.log("Gulp");
});

gulp.task('scripts', function() {
    return gulp.src('js/tasks/*.js', {newLine: ';'})
        .pipe(debug({title: 'concat js'}))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('styles', function() {
    return gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(debug({title: 'concat styles'}))
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/'));
});

