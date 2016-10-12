"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = function Props() {
    _classCallCheck(this, Props);

    this.activeOpacity = 0.7;
    this.activeStyle = {};
    this.textStyle = {};
    this.activeTextStyle = {};
};

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);

    this.active = false;
};

exports.State = State;