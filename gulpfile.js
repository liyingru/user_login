var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var url = require('url');
var fs = require('fs');
var path = require('path');

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8888,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    res.end();
                    return;
                }
                if (pathname === '/api/index') {

                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
})