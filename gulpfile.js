/* Gulp */
const gulp = require('gulp');
/*Gulp Sass */
const sass = require('gulp-sass')(require('sass'));
/*Source Maps: Gulp */
const sourcemaps = require('gulp-sourcemaps');
/*Watcher */
const watch = require('gulp-watch');
/*Mimificador: Gulp */
const uglify = require('gulp-uglify');
/*Imagens Compresor: gulp */
const imagemin = require('gulp-imagemin');

/*Compila estilos SASS */
function buildStyles() {
    return gulp.src('./sources/styles/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))        
        .pipe(gulp.dest('./build/styles/'))
};

/**
 * Compila e mimifica arquivos .js
 */
function compilaJs(){    

    return gulp.src('./sources/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts/'));

}

function comprimeImagens(){
    return gulp.src('./sources/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img/'))
}

exports.buildStyles = buildStyles;
exports.compilaJs = compilaJs;
exports.comprimeImagens = comprimeImagens;
exports.watch = () => {
    watch('./sources/styles/*.scss', { ignoreInitial: false }, buildStyles);
    watch('./sources/scripts/*.js', { ignoreInitial: false }, compilaJs);
    watch('./sources/img/*', { ignoreInitial: false }, comprimeImagens);
}