"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var typings = require('./number.type');
var classNames = require('classnames');
var index_1 = require('nt-web-button');
var index_2 = require('nt-web-input');
var transmit_transparently_1 = require('nt-transmit-transparently');
var index_3 = require('nt-auto-bind');
var parse_to_number_1 = require('./parse-to-number');
require('./number.css');
var interval = void 0;

var Number = function (_React$Component) {
    _inherits(Number, _React$Component);

    function Number() {
        var _ref;

        _classCallCheck(this, Number);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Number.__proto__ || Object.getPrototypeOf(Number)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Number, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                value: this.props.value ? parse_to_number_1.default(this.props.value, this, true) : parse_to_number_1.default(this.props.defaultValue, this, true)
            });
        }
    }, {
        key: "handleMouseUp",
        value: function handleMouseUp() {
            clearInterval(interval);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            document.addEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: "increase",
        value: function increase() {
            var _this2 = this;

            interval = setInterval(function () {
                _this2.safeSetValue((parseFloat(_this2.state.value) || 0) + _this2.props.step, true);
            }, this.props.speed);
            this.safeSetValue((parseFloat(this.state.value) || 0) + this.props.step, true);
        }
    }, {
        key: "reduce",
        value: function reduce() {
            var _this3 = this;

            interval = setInterval(function () {
                _this3.safeSetValue((parseFloat(_this3.state.value) || 0) - _this3.props.step, true);
            }, this.props.speed);
            this.safeSetValue((parseFloat(this.state.value) || 0) - this.props.step, true);
        }
    }, {
        key: "rightRender",
        value: function rightRender() {
            return React.createElement("div", { className: "addon" }, React.createElement(index_1.Button, { onMouseDown: this.increase.bind(this), type: "secondary" }, React.createElement("span", { className: "fit-number-arrow-up" })), React.createElement(index_1.Button, { onMouseDown: this.reduce.bind(this), type: "secondary" }, React.createElement("span", { className: "fit-number-arrow-down" })));
        }
    }, {
        key: "handleChange",
        value: function handleChange(value) {
            this.safeSetValue(value);
        }
    }, {
        key: "safeSetValue",
        value: function safeSetValue(value, fullLength) {
            this.setState({
                value: parse_to_number_1.default(value.toString(), this, fullLength)
            });
            this.props.onChange(value.toString());
        }
    }, {
        key: "render",
        value: function render() {
            var _others = transmit_transparently_1.others(new typings.Props(), this.props);
            var classes = classNames(_defineProperty({
                'nt-web-number-number': true
            }, this.props.className, !!this.props.className));
            return React.createElement(index_2.Input, __assign({}, _others, { className: classes, value: this.state.value, onChange: this.handleChange.bind(this), rightRender: this.rightRender.bind(this) }));
        }
    }]);

    return Number;
}(React.Component);

Number.defaultProps = new typings.Props();
__decorate([index_3.autoBindMethod], Number.prototype, "handleMouseUp", null);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Number;