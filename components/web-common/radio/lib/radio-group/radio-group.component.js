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
var typings = require('./radio-group.type');
var classNames = require('classnames');
var index_1 = require('nt-web-button');
var transmit_transparently_1 = require('nt-transmit-transparently');
require('./radio-group.css');
var RadioGroup = function (_React$Component) {
    _inherits(RadioGroup, _React$Component);

    function RadioGroup(props) {
        _classCallCheck(this, RadioGroup);

        var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

        _this.state = new typings.State();
        var value = false;
        if (_this.props.defaultValue !== null) {
            value = _this.props.defaultValue;
        }
        if (_this.props.value !== null) {
            value = _this.props.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    _createClass(RadioGroup, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: "handleChange",
        value: function handleChange(value, checked) {
            var _this2 = this;

            if (checked) {
                this.setState({
                    value: value
                }, function () {
                    _this2.props.onChange(value);
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var childs = React.Children.map(this.props.children, function (child) {
                return React.cloneElement(child, {
                    style: _this3.props.vertical ? { marginTop: 10 } : { marginRight: 10 },
                    onChange: _this3.handleChange.bind(_this3, child.props.value),
                    checked: _this3.state.value === child.props.value
                });
            });
            var classes = classNames(_defineProperty({
                'nt-web-radio-radio_group': true,
                'vertical': this.props.vertical
            }, this.props.className, !!this.props.className));
            switch (this.props.type) {
                case 'button':
                    var buttonChilds = React.Children.map(this.props.children, function (child) {
                        var props = {
                            onClick: _this3.handleChange.bind(_this3, child.props.value, true),
                            active: _this3.state.value === child.props.value,
                            disabled: child.props.disabled
                        };
                        return React.createElement(index_1.Button, __assign({}, props), child.props.children);
                    });
                    return React.createElement(index_1.ButtonGroup, __assign({}, this.props.others, { className: classes, vertical: this.props.vertical }), buttonChilds);
                default:
                    return React.createElement("div", __assign({}, this.props.others, { className: classes }), childs);
            }
        }
    }]);

    return RadioGroup;
}(React.Component);
RadioGroup.defaultProps = new typings.Props();
RadioGroup = __decorate([transmit_transparently_1.TransmitTransparently()], RadioGroup);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RadioGroup;