const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create();


function style() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',        
        }
    })

    gulp.watch('./src/sass/**/*.scss', style)
    gulp.watch('./**/*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;