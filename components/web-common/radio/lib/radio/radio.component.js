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
var typings = require('./radio.type');
var classNames = require('classnames');
var transmit_transparently_1 = require('nt-transmit-transparently');
require('./radio.css');
var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio(props) {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

        _this.state = new typings.State();
        var checked = void 0;
        if (_this.props.defaultChecked !== undefined) {
            checked = _this.props.defaultChecked;
        }
        if (_this.props.checked !== undefined) {
            checked = _this.props.checked;
        }
        _this.state = {
            checked: checked
        };
        return _this;
    }

    _createClass(Radio, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.checked !== null) {
                this.setState({
                    checked: nextProps.checked
                });
            }
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var _this2 = this;

            this.setState({
                checked: event.target.checked
            }, function () {
                _this2.props.onChange(_this2.state.checked);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var classes = classNames(_defineProperty({
                'nt-web-radio-radio': true,
                'i-checks': true,
                'i-checks-lg': this.props.size === 'large',
                'i-checks-sm': this.props.size === 'small',
                'disabled': this.props.disabled
            }, this.props.className, !!this.props.className));
            return React.createElement("label", __assign({}, this.props.others, { className: classes }), React.createElement("input", { type: "radio", disabled: this.props.disabled, checked: this.state.checked, onChange: this.handleChange.bind(this) }), React.createElement("i", null), React.createElement("span", null, this.props.children));
        }
    }]);

    return Radio;
}(React.Component);
Radio.defaultProps = new typings.Props();
Radio = __decorate([transmit_transparently_1.TransmitTransparently()], Radio);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Radio;