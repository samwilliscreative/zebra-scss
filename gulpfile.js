"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge-stream');
const clone = require('gulp-clone');

const src = './src/sass/zebra.scss';
const destination = './dist/css/';
const autoprefixerBrowsers = ['last 2 versions', 'ie >= 8'];

gulp.task('sass', function () {
    let source = gulp.src('./src/sass/zebra.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: autoprefixerBrowsers,
            cascade: false
        }));

    let pipe1 = source.pipe(clone())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination));

    let pipe2 = source.pipe(clone())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination));

    return merge(pipe1, pipe2);
});

gulp.task('default', ['sass']);

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.scss', ['sass']);
});