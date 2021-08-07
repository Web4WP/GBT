"use strict";

const gulp = require('gulp');
const pug2Html = require('./gulp/pug');
const scss2Css = require('./gulp/scss');
const serve = require('./gulp/server');
const imgMin = require('./gulp/image');
const svgSprite = require('./gulp/svg');
const fonts = require('./gulp/fonts');
const copyCSS = require('./gulp/copyCssLib');
const copyJS = require('./gulp/copyJsLib');
const del = require('./gulp/del');

module.exports.build = gulp.series(del, fonts, pug2Html, scss2Css, imgMin, svgSprite, copyCSS, copyJS);
module.exports.start = gulp.series(del, fonts,  pug2Html, scss2Css, imgMin, svgSprite, copyCSS, copyJS, serve);
