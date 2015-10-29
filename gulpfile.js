var gulp = require('gulp');
var server = require('gulp-server-livereload');
var scss = require('gulp-scss');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var spritesmith = require('gulp.spritesmith');

var paths = {
	scss: 'app/scss/main.scss',
	jade: 'app/jade/pages/*.jade',
	jadeToWatch: 'app/jade/**/*.jade',
	compass : {
			configFile  : 'app/config.rb',
			cssFolder   : 'app/css',
			scssFolder  : 'app/scss',
			imgFolder   : 'app/img'
		}
};
 
gulp.task('serve', function() {
  gulp.src('app')
  	.pipe(plumber())
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('scss', function() {
	gulp.src(paths.scss)
	.pipe(plumber())
	.pipe(scss({'bundleExec': false}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('jade', function() {
	gulp.src(paths.jade)
	.pipe(plumber())
	.pipe(jade({
		pretty: '\t'
	}))
	.pipe(gulp.dest('app/'));
});

gulp.task('compass', function() {
	gulp.src(paths.scss)
		.pipe(plumber())
		.pipe(compass({
			config_file: paths.compass.configFile,
			css: paths.compass.cssFolder,
			sass: paths.compass.scssFolder,
			image: paths.compass.imgFolder
		}))
		.pipe(livereload());
});

gulp.task('watch', function(){
	gulp.watch(paths.jadeToWatch, ['jade']);
	gulp.watch(paths.scss, ['scss']);
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('app/img/views/*.png').pipe(spritesmith({
    imgName: 'img/sprite-views.png',
    cssName: 'sprite-views.css',
    padding: 70
  }));
  return spriteData.pipe(gulp.dest('sprite'));
});