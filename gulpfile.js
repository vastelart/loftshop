var gulp = require('gulp');
var server = require('gulp-server-livereload');
var scss = require('gulp-scss');
var watch = require('gulp-watch');
var jade = require('gulp-jade');

var paths = {
	scss: 'app/scss/**/*.scss',
	jade: 'app/index.jade'
}
 
gulp.task('serve', ['watch-scss', 'watch-jade'], function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('watch-scss', function() {
	gulp.src(paths.scss)
	.pipe(watch(paths.scss))
	.pipe(scss({'bundleExec': false}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch-jade', function() {
	gulp.src(paths.jade)
	.pipe(watch(paths.jade))
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('app/'));
});