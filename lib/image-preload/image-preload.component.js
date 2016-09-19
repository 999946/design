"use strict";

Object.defineProperty(exports, "__esModule", {value: true});
exports.default = function (pictureUrls, callback) {
    var loaded = 0;
    for (var i = 0, j = pictureUrls.length; i < j; i++) {
        (function (img, src) {
            img.onload = function () {
                if (++loaded == pictureUrls.length && callback) {
                    callback();
                }
            };
            img.src = src;
        })(new Image(), pictureUrls[i]);
    }
};