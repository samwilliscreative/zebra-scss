"use strict";

let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');

const src = './src/sass/zebra.scss';
const destination = './dist/css/';
const autoprefixrBrowsers = ['last 2 versions', 'ie >= 8'];

gulp.task('sass', function () {
    return gulp.src('./src/sass/zebra.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: autoprefixrBrowsers,
            cascade: false
        }))
        .pipe(gulp.dest(destination))
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destination));
});

gulp.task('default', ['sass']);

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.scss', ['sass']);
});
