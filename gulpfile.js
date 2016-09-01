var gulp = require('gulp'), 
postcss = require('gulp-postcss'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
less = require('gulp-less'),
minify = require('cssnano');

gulp.task('css', function () {
    return gulp.src('layout.less')
        .pipe( sourcemaps.init() )
        .pipe( less() )
        .pipe( postcss([ autoprefixer(), minify() ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('./') );
});