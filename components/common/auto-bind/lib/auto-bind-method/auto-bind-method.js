"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (target, key, descriptor) {
    var fn = descriptor.value;
    if (typeof fn !== 'function') {
        throw new Error("@autobind decorator can only be applied to methods not: " + (typeof fn === "undefined" ? "undefined" : _typeof(fn)));
    }
    return {
        configurable: true,
        get: function get() {
            if (this === fn.prototype || this.hasOwnProperty(key)) {
                return fn;
            }
            var boundFn = fn.bind(this);
            Object.defineProperty(this, key, {
                value: boundFn,
                configurable: true,
                writable: true
            });
            return boundFn;
        },
        set: function set(newValue) {
            return newValue;
        }
    };
};