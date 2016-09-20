"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = function Props() {
    _classCallCheck(this, Props);

    this.count = 0;
    this.component = 'sup';
    this.onAnimated = function () {};
    this.height = 18;
};

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);

    this.animateStarted = false;
    this.count = 0;
};

exports.State = State;