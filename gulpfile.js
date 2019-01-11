const gulp = require('gulp');

const sass = require('gulp-sass');
const minify = require('gulp-minify');

const paths = {
    sass: {
        src: 'src/sass/*.scss',
        dest: 'dist'
    },

    js: {
        src: './src/js/*.js',
        dest: './dist/js'
    },

    images: {
      src: 'src/images/**/*.{jpg,jpeg,png}',
      dest: 'dist/img/'
    },

    html: {
        src: 'src/**/*.{htm, html}',
        dest: 'dist'
    }
  }
  

function copyHTML() {

    return gulp.src(paths.sass.src)
        .pipe(gulp.dest(paths.sass.dest))

}

function convertSASS(){

    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))

}

function processJS(){
    return gulp.src(paths.js.src)
    .pipe(minify())
    .pipe(gulp.dest(paths.js.dest))
}

function watch() {
    gulp.watch(paths.html.src, copyHTML);
    gulp.watch(paths.sass.src, convertSASS);
    gulp.watch(paths.js.src, processJS)
  }

var build = gulp.series(copyHTML, convertSASS, watch)

exports.copyHTML = copyHTML;
exports.convertSASS = convertSASS;
exports.processJS = processJS;
exports.watch = watch;
exports.build = build;


exports.default = build;

