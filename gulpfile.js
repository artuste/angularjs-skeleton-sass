/* global require: true */
'use strict';

var gulp       = require('gulp'),
    merge      = require('merge-stream'),
    requireDir = require('require-dir'),
    $          = require('gulp-load-plugins')();

// Not loaded by gulp-load-plugins, but often used
$.merge = merge;

// Load application tasks
(function () {
    var dir = requireDir('./tasks');

    Object.keys(dir).forEach(function (key) {
        dir[key](gulp, $);
    });
}());

gulp.task('serve', ['clean'], function () {
    gulp.start('open');
});

gulp.task('build', ['copy', 'css'], function () {
});
