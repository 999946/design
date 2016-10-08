"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.Type = {
    Default: 'default',
    Primary: 'primary',
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Danger: 'danger',
    Dark: 'dark'
};

var Props = function Props() {
    _classCallCheck(this, Props);

    this.type = exports.Type.Default;
    this.disabled = false;
    this.active = false;
    this.loading = false;
    this.rounded = false;
    this.addonLeft = null;
    this.addonRight = null;
    this.onClick = function () {};
};

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);
};

exports.State = State;