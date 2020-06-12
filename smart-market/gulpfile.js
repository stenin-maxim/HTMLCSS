let gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'), // Объединение файлов - конкатенация
	cssnano	= require('gulp-cssnano'),	// Минимизация CSS
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	changed = require('gulp-changed'),
	watch = require('gulp-watch');

gulp.task('sass', function(){
	return gulp.src('sass/**/*.scss')	//откуда брать файлы
	.pipe(sass())	//pipe - означает "выполнить"; sass - переводит SASS в CSS
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('css'))	//куда сваливать откомпилированные файлы
});

/*gulp.task('css', function(){
	return gulp.src([
		'css/style.css',
	])
	.pipe(concat("style.css"))			//соединяем css
	.pipe(cssnano())					//сжимаем файл
	.pipe(rename({suffix: '.min'}))		//переименовываем файл и придаем ему суффикс min
	.pipe(gulp.dest('css'))			//выгружаем
});*/

gulp.task("watch", function() {
	// Метод .series запускает задачи последовательно
   	gulp.watch("sass/*.scss", gulp.series('sass')).on('change', browserSync.reload);
   	//gulp.watch("css/*.css", gulp.series('css')).on('change', browserSync.reload);
});