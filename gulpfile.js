'use strict'

const devPort = process.env.PORT_DEV || '3000'
const css = 'src/*.css'
const js = 'src/js/*.js'
const html = 'public/**/*.html'
const htmlTemplate = 'src/**/*.hbs'
const publicAssets = 'public'
const destination = {
  css: publicAssets + '/css',
  fonts: publicAssets + '/fonts',
  js: publicAssets + '/js'
}

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const bs = require('browser-sync').create()
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const gutil = require('gulp-util')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')

gulp.task('default', ['build', 'import'])

gulp.task('build', ['build:css', 'build:js'])

gulp.task('build:css', () => {
  return gulp.src(css)
  .pipe(rename({suffix: '.min'}))
  .pipe(postcss([autoprefixer()]))
  .pipe(cleanCSS())
  .pipe(gulp.dest(destination.css))
  .pipe(bs.stream())
})

gulp.task('build:js', () => {
  browserify('src/js/')
  .bundle()
  .on('error', error => gutil.log(error))
  .pipe(source('bundle.min.js'))
  .pipe(buffer())
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest(destination.js))
  .pipe(bs.stream())
})

gulp.task('import', ['font-awesome'])

gulp.task('font-awesome', () => {
  gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
  .pipe(gulp.dest(destination.css))
  gulp.src('node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest(destination.fonts))
})

gulp.task('browser-sync', () => {
  bs.init({
    server: {
      baseDir: 'public'
    },
    port: devPort,
    open: true
  })

  gulp.watch(css, ['build:css'])
  gulp.watch(js, ['build:js'])
  gulp.watch(html, bs.reload)
  gulp.watch(htmlTemplate, bs.reload)
})
