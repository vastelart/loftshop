var gulp = require('gulp');
var server = require('gulp-server-livereload');
var scss = require('gulp-scss');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var compass = require('gulp-compass');

var paths = {
	scss: 'app/scss/**/*.scss',
	jade: 'app/jade/pages/*.jade',
	compass : {
			configFile  : 'app/config.rb',
			cssFolder   : 'app/css',
			scssFolder  : 'app/scss',
			imgFolder   : 'app/img'
		}
};
 
gulp.task('serve', ['compass', 'jade', 'watch'], function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('scss', function() {
	gulp.src(paths.scss)
	.pipe(watch(paths.scss))
	.pipe(scss({'bundleExec': false}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('jade', function() {
	gulp.src(paths.jade)
	.pipe(watch(paths.jade))
	.pipe(jade({
		pretty: '\t'
	}))
	.pipe(gulp.dest('app/'));
});

gulp.task('compass', function() {
	gulp.src(paths.scss)
		.pipe(compass({
			config_file: paths.compass.configFile,
			css: paths.compass.cssFolder,
			sass: paths.compass.scssFolder,
			image: paths.compass.imgFolder
		}));
});

gulp.task('watch', function(){
	gulp.watch(paths.jade, ['jade']);
	gulp.watch(paths.scss, ['compass']);
});