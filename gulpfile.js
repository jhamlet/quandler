var gulp     = require('gulp'),
    // concat   = require('gulp-concat'),
    // fs       = require('fs'),
    // path     = require('path'),
    clean    = require('del'),
    // pkgInfo  = require('./package.json'),
    CLOBBER  = [];
    
gulp.task('clobber', function (done) {
    clean(CLOBBER, done);
});

gulp.task('default', function (done) {
    done();
});

