"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require("react");

var Props = function Props() {
    (0, _classCallCheck3.default)(this, Props);

    this.title = '';
    this.titleRender = function () {
        return React.createElement("div", null, "tool tip!");
    };
    this.zIndex = 102;
    this.shadowZIndex = 101;
    this.position = 'top';
    this.type = 'hover';
    this.showShadow = false;
    this.simple = false;
};

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);

    this.childrenTop = 0;
    this.childrenLeft = 0;
    this.childrenWidth = 0;
    this.childrenHeight = 0;
    this.tooltipWidth = 0;
    this.tooltipHeight = 0;
    this.show = false;
};

exports.State = State;