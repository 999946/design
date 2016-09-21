"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
var React = require('react');
var classNames = require('classnames');
var ReactDOM = require('react-dom');
var typings = require('./button.type');
require('./button.css');
var index_1 = require('nt-transmit-transparently');
var hasClass = function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};
var removeClass = function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
};

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        var _ref;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.selfDom = ReactDOM.findDOMNode(this);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            if (this.props.disabled || this.props.loading) return;
            this.props.onClick(event);
            var d = void 0,
                x = void 0,
                y = void 0;
            var taint = this.selfDom.querySelector('.taint');
            if (!taint) {
                taint = document.createElement('div');
                taint.className = 'taint';
                this.selfDom.appendChild(taint);
            }
            removeClass(taint, 'drop');
            var selfDomBoundingClientRect = this.selfDom.getBoundingClientRect();
            if (!taint.clientHeight && !taint.clientWidth) {
                d = Math.max(selfDomBoundingClientRect.width, selfDomBoundingClientRect.height);
                taint.style.height = d + 'px';
                taint.style.width = d + 'px';
            }
            x = event.pageX - selfDomBoundingClientRect.left - taint.clientWidth / 2;
            y = event.pageY - selfDomBoundingClientRect.top - taint.clientHeight / 2;
            taint.className += ' drop';
            taint.style.top = y + 'px';
            taint.style.left = x + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames2;

            var addon = null;
            if (this.props.addonLeft || this.props.addonRight) {
                var _classNames;

                var addonClass = classNames((_classNames = {
                    'fa': true
                }, _defineProperty(_classNames, 'fa-' + (this.props.addonLeft || this.props.addonRight), true), _defineProperty(_classNames, 'btn-addon-left', this.props.addonLeft), _defineProperty(_classNames, 'btn-addon-right', this.props.addonRight), _classNames));
                addon = React.createElement("i", { className: addonClass });
            }
            var loadingComponent = null;
            if (this.props.loading === true) {
                var loadingClass = classNames({
                    'loading-container': true,
                    'show': true
                });
                loadingComponent = React.createElement("div", { className: loadingClass }, React.createElement("i", { className: "fit-button-loading animation-spin" }));
            }
            var btnClass = classNames((_classNames2 = {
                'nt-web-button-button': true,
                'btn': true
            }, _defineProperty(_classNames2, 'btn-' + this.props.type, true), _defineProperty(_classNames2, 'disabled', this.props.disabled || this.props.loading === true), _defineProperty(_classNames2, 'btn-addon', this.props.addonLeft || this.props.addonRight), _defineProperty(_classNames2, 'btn-rounded', this.props.rounded), _defineProperty(_classNames2, 'active', this.props.active), _defineProperty(_classNames2, this.props.className, !!this.props.className), _classNames2));
            var _others = index_1.others(new typings.Props(), this.props);
            return React.createElement("button", __assign({}, _others, { onClick: this.handleClick.bind(this), className: btnClass }), React.createElement("div", { className: "button-container" }, this.props.addonLeft ? addon : null, React.createElement("div", { className: "text-child" }, this.props.children), this.props.addonRight ? addon : null, this.props.loading ? loadingComponent : null));
        }
    }]);

    return Button;
}(React.Component);

Button.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;