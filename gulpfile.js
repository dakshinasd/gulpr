const gulp = require('gulp');

const sass = require('gulp-sass');
livereload = require('gulp-livereload');

const paths = {
    sass: {
        src: 'src/sass/*.scss',
        dest: 'dist'
    },

    js: {
        src: 'src/js/*.js',
        dest: 'dist'
    },

    images: {
      src: 'src/images/**/*.{jpg,jpeg,png}',
      dest: 'build/img/'
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

function watch() {
    gulp.watch(paths.html.src, copyHTML);
    gulp.watch(paths.sass.src, convertSASS);
  }

var build = gulp.series(copyHTML, convertSASS, watch)

exports.copyHTML = copyHTML;
exports.convertSASS = convertSASS;
exports.watch = watch;
exports.build = build;


exports.default = build;

