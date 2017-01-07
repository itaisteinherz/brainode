const gulp = require("gulp"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify");

const jsGlob = ["src/**/*.js"];

gulp.task("default", ["build", "watch"]);

gulp.task("build", ["js"]);

gulp.task("watch", () => {
    gulp.watch(jsGlob, ["js"]);
});

gulp.task("js", () => {
    gulp.src(jsGlob)
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});
