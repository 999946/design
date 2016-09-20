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
var ReactDOM = require('react-dom');
var $ = require('jquery');
var typings = require('./tabs.type');
var classNames = require('classnames');
var index_1 = require('nt-transmit-transparently');
require('./tabs.css');
var renderTab = function renderTab(name) {
    return function (active) {
        if (!active) {
            return React.createElement("div", { className: "center-text" }, name);
        } else {
            return React.createElement("div", { className: "tab-bar-content" }, React.createElement("div", { className: "tab-bar-left" }, React.createElement("div", { className: "tab-bar-left-nav" })), name, React.createElement("div", { className: "tab-bar-right" }, React.createElement("div", { className: "tab-bar-right-nav" })));
        }
    };
};
var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs() {
        var _ref;

        _classCallCheck(this, Tabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Tabs, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.state = {
                activeKey: this.props.activeKey || this.props.defaultActiveKey
            };
            this.previousTitleIndex = -1;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.dom = ReactDOM.findDOMNode(this);
            var activeIndex = -1;
            React.Children.map(this.props.children, function (item, index) {
                if (_this2.state.activeKey === item.props.activeKey) {
                    activeIndex = index;
                }
            });
            setTimeout(function () {
                _this2.setActive(_this2.state.activeKey, activeIndex);
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if ('activeKey' in nextProps && nextProps.activeKey !== null) {
                this.setState({
                    activeKey: nextProps.activeKey
                });
            }
        }
    }, {
        key: "setActive",
        value: function setActive(value, index) {
            if (index === this.previousTitleIndex) return;
            var $dom = $(this.dom);
            var titleContainer = $dom.find('.title-container');
            var titleItem = $dom.find(".title-item-" + index);
            var currentLeft = titleItem.offset().left - titleContainer.offset().left;
            this.setState({
                activeKey: value,
                isForward: index > this.previousTitleIndex,
                moveBarStyle: {
                    left: currentLeft,
                    right: titleContainer.width() - currentLeft - titleItem.width() - 20
                }
            });
            this.previousTitleIndex = index;
        }
    }, {
        key: "handleTitleClick",
        value: function handleTitleClick(value, index) {
            this.setActive(value, index);
            this.props.onChange(value);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var classes = classNames(_defineProperty({
                'nt-web-tabs-tabs': true,
                'retro': this.props.type === 'retro'
            }, this.props.className, !!this.props.className));
            var Title = React.Children.map(this.props.children, function (item, index) {
                var isActive = _this3.state.activeKey === item.props.activeKey;
                var titleClassNames = classNames(_defineProperty({
                    'active': isActive,
                    'title-item': true
                }, "title-item-" + index, true));
                var titleContent = item.props.tab || item.props.tabRender(isActive);
                switch (_this3.props.type) {
                    case 'retro':
                        titleContent = renderTab(item.props.tab)(isActive);
                        break;
                }
                return React.createElement("div", { onClick: _this3.handleTitleClick.bind(_this3, item.props.activeKey, index), className: titleClassNames }, titleContent);
            });
            var Children = React.Children.map(this.props.children, function (item) {
                return React.cloneElement(item, {
                    active: _this3.state.activeKey === item.props.activeKey
                });
            });
            var moveBarClassnames = classNames({
                'move-bar': true,
                'forward': this.state.isForward,
                'backward': !this.state.isForward
            });
            return React.createElement("div", __assign({}, this.props.others, { className: classes }), React.createElement("div", { className: "title-container" }, React.createElement("div", { className: moveBarClassnames, style: this.state.moveBarStyle }), Title), React.createElement("div", { className: "content-container" }, Children));
        }
    }]);

    return Tabs;
}(React.Component);
Tabs.defaultProps = new typings.Props();
Tabs = __decorate([index_1.TransmitTransparently()], Tabs);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tabs;