const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync");
const watch = require("gulp-watch");

function hello(done) {
  console.log("HELLO");
  done();
}

function cssStyle(done) {
  gulp
    .src("./src/style/**/*.sass")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 2 versions"]
      })
    )
    //---
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/style/"));
    .pipe(browserSync.stream())
}

function watchFiles(done) {
gulp.watch("./src/style/**/*" , cssStyle)
gulp.watch("./*.html" )
gulp.watch("./src/**/*.js" )
}

function browserReload(done) {
 browserSync.reload()
 done()
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
}


gulp.task("default", gulp.parallel(sync, watchFiles));