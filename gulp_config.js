let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon({
        script:'bin/www',
        ext: 'js',
        env: {PORT:8000},
        ignore: ["./node_modules/**"]
    })
        .on('restart', function () {
            console.log('restarting')
        });
});