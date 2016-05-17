var gulp = require('gulp')
var gm = require('gulp-gm')

gulp.task('resize', function () {
  gulp.src('assets/uploads/raw/*.+(jpeg|jpg|png|tiff|webp')
    .pipe(gm(function (file) {
      file.setFormat('jpg').quality(100)
      return file.resize(null, 1024)
    }))
    .pipe(gulp.dest('assets/uploads'))
})

gulp.task('watch', function () {
  gulp.watch('assets/uploads/raw/*', ['resize'])
})

gulp.task('default', ['resize', 'watch'])
