var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

    gulp.task('sass', function () {
    return gulp.src('./assets/sass/zebra.scss')

    .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest('./dist/css/'));
    });

    gulp.task('default', function () {
        gulp.watch('./assets/sass/zebra.scss', ['sass']);
    });