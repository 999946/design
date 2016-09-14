"use strict";

var auto_bind_method_1 = require('../auto-bind-method/auto-bind-method');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (target) {
    var keys = Object.getOwnPropertyNames(target.prototype);
    keys.forEach(function (key) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (typeof descriptor.value === 'function') {
            Object.defineProperty(target.prototype, key, auto_bind_method_1.default(target, key, descriptor));
        }
    });
    return target;
};