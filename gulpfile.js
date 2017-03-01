"use strict";

let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');
let filter = require('gulp-filter');

const src = './src/sass/zebra.scss';
const destination = './dist/css/';
const autoprefixerBrowsers = ['last 2 versions', 'ie >= 8'];

gulp.task('sass', function () {
    return gulp.src('./src/sass/zebra.scss')

        // .pipe(sourcemaps.init())
        //     .pipe(sass().on('error', sass.logError))
        //     .pipe(autoprefixer({
        //         browsers: autoprefixerBrowsers,
        //         cascade: false
        //     }))
        // .pipe(sourcemaps.write('.'))
        // .pipe(gulp.dest(destination))
        // .pipe(cssnano())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        // .pipe(gulp.dest(destination));

        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: autoprefixerBrowsers,
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
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
