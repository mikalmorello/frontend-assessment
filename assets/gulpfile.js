'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var importer = require('node-sass-globbing');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var gulpwatch = require('gulp-watch');
var baseimg = require('gulp-baseimg');
//var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');


var sass_config = {
  importer: importer,
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/',
  ]
};

var svgstore_config = {
  src: 'svg/svgstore/**/*.svg',
  dist: 'svg',
  template: 'svg/svgstore/util/_template.mustache',
  sass: '_svgstore.scss',
  out: 'sass/base',
  opts: {
    inlineSvg: true
  },
  /*imagemin: {
    svgoPlugins: [
    {removeTitle: true}
    ]
  }*/
};

gulp.task('gulp-watch', function() {
  gulp.watch("sass/**/*.scss", ['sass']);
  gulp.watch(svgstore_config.src, ['svgstore', 'svgstore-sass' ]);
  gulp.watch(svgstore_config.template, ['svgstore-sass']);
});

gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version'],
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('css'));
});

gulp.task('svgstore-sass', function() {
  return gulp.src(svgstore_config.src)
    .pipe(baseimg({ 
      styleTemplate: svgstore_config.template,
      styleName: svgstore_config.sass
    }))
    .pipe(gulp.dest(svgstore_config.out));
});

// create an optimized svg sprite sheet for base
gulp.task('svgstore', function() {
  return gulp.src(svgstore_config.src)
    ///.pipe(imagemin(svgstore_config.imagemin))
    .pipe(svgstore(svgstore_config.opts))
    .pipe(gulp.dest(svgstore_config.dist))
});

gulp.task('default', [ 'gulp-watch']);
