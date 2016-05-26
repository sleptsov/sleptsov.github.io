'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var debug = require('gulp-debug');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var remember = require('gulp-remember');
var browserSync = require('browser-sync').create();


// check if we need to add sourcemaps
const isDevelopment = !process.env.NODE_ENV ||process.env.NODE_ENV == 'development';

//scss to styles task
gulp.task('styles', function () {
    return gulp.src(['node_modules/flickity/dist/flickity.min.css','app/styles/main.scss'])
        .pipe(debug({title: 'styles'}))
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(remember('styles'))
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulpif(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('dist/styles'));
});

//copy assets
//gulp.task('assets', function(){
//    return gulp.src('app/assets/**', {since: gulp.lastRun('assets')})
//        .pipe(newer('dist'))
//        .pipe(debug({title: 'assets'}))
//        .pipe(gulp.dest('dist'))
//});

//min images
gulp.task('images', function(){
   return gulp.src('app/assets/images/**', {since: gulp.lastRun('images')})
       .pipe(newer('dist/images'))
       .pipe(imagemin())
       .pipe(gulp.dest('dist/images'))

});

//min html
gulp.task('min-html', function(){
    return gulp.src('app/*.html')
        .pipe(debug({title: 'html'}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
            'node_modules/flickity/dist/flickity.pkgd.min.js',
            'libs/lodash.js',
            'app/js/*.js'
            ])
        .pipe(gulpif(isDevelopment, sourcemaps.init()))
        .pipe(debug({title: 'scripts'}))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulpif(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('dist/scripts'));
});

//clean dist folder
gulp.task('clean', function(){
    return del('dist');
});

//build project
gulp.task('build', gulp.series('clean', gulp.parallel( 'styles', 'scripts', 'min-html', 'images')));

//watch task
gulp.task('watch', function(){
    gulp.watch('app/styles/**/*.scss', gulp.series('styles'));
    //gulp.watch('app/assets/**/*.*', gulp.series('assets'));
    gulp.watch('app/js/**/*.js', gulp.series('scripts'));
    gulp.watch('app/**/*.html', gulp.series('min-html'));
    gulp.watch('app/assets/images/**', gulp.series('images'));
});


//serve
gulp.task('serve', function(){
    browserSync.init({
        server: 'dist'
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

//dev task
gulp.task('dev', gulp.series('build', gulp.parallel('watch','serve')));

