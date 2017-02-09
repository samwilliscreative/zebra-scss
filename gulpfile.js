var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./src/sass/zebra.scss')

        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify', function () {
    gulp.src('./dist/css/zebra.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
})

gulp.task('default', function () {
    gulp.watch('./src/sass/*.scss', ['sass', 'minify']);

});