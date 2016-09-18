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
var typings = require('./badge.type');
var classNames = require('classnames');
var index_1 = require('nt-transmit-transparently');
var Animate = require('rc-animate');
var scroll_number_component_1 = require('../scroll-number/scroll-number.component');
require('./badge.css');
var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        var _ref;

        _classCallCheck(this, Badge);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Badge.__proto__ || Object.getPrototypeOf(Badge)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Badge, [{
        key: "render",
        value: function render() {
            var countAfterCalculation = this.props.count > this.props.overflowCount ? this.props.overflowCount + "+" : this.props.count;
            if (this.props.dot) {
                countAfterCalculation = '';
            }
            var hidden = (!countAfterCalculation || countAfterCalculation === '0') && !this.props.dot;
            var scrollNumberCls = this.props.dot ? 'dot' : 'count';
            var classes = classNames(_defineProperty({
                'nt-web-badge-badge': true,
                'not-a-wrapper': !this.props.children
            }, this.props.className, !!this.props.className));
            return React.createElement("span", { className: classes, title: countAfterCalculation }, this.props.children, React.createElement(Animate, { showProp: "data-show", transitionName: "zoom", transitionAppear: true }, hidden ? null : React.createElement(scroll_number_component_1.default, __assign({ "data-show": !hidden, className: scrollNumberCls, count: countAfterCalculation }, this.props.others))));
        }
    }]);

    return Badge;
}(React.Component);
Badge.defaultProps = new typings.Props();
Badge = __decorate([index_1.TransmitTransparently()], Badge);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Badge;