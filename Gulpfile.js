var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var reload = browserSync.reload;

gulp.task('sass', function() {
	return gulp.src('./src/css/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./src/css/'))
		.pipe(reload({ stream: true }));
});

gulp.task('serve',['sass'], function() {
	browserSync({
		server: {
			baseDir: 'src'
		}
	});

	gulp.watch('src/css/*.scss', ['sass']).on('change', reload);
	gulp.watch('src/*.html').on('change', reload);
});

gulp.task('watch', function() {
	gulp.watch('src/css/*.scss', ['sass']);
});