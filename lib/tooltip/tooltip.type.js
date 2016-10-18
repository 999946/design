"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var React = require("react");

var Props = function Props() {
    _classCallCheck(this, Props);

    this.title = '';
    this.titleRender = function () {
        return React.createElement("div", null, "tool tip!");
    };
    this.zIndex = 100;
    this.shadowZIndex = 99;
    this.position = 'top';
    this.type = 'hover';
    this.showShadow = false;
    this.simple = false;
};

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);

    this.childrenTop = 0;
    this.childrenLeft = 0;
    this.childrenWidth = 0;
    this.childrenHeight = 0;
    this.tooltipWidth = 0;
    this.tooltipHeight = 0;
    this.show = false;
};

exports.State = State;