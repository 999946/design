"use strict";

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var typings = require("./tabs.type");
var classNames = require("classnames");
var index_1 = require('nt-transmit-transparently');
var index_2 = require('nt-auto-bind');
require("./tabs.css");
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
    (0, _inherits3.default)(Tabs, _React$Component);

    function Tabs() {
        (0, _classCallCheck3.default)(this, Tabs);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(Tabs, [{
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
            this.setActive(this.state.activeKey, activeIndex);
            this.activeIndex = activeIndex;
            window.addEventListener('resize', this.handleAnyDomChange);
            if (MutationObserver) {
                var mObserver = new MutationObserver(this.handleAnyDomChange);
                mObserver.observe(ReactDOM.findDOMNode(this), {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleAnyDomChange);
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
        key: "handleAnyDomChange",
        value: function handleAnyDomChange() {
            this.setActive(this.state.activeKey, this.activeIndex);
        }
    }, {
        key: "setActive",
        value: function setActive(value, index) {
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

            var classes = classNames((0, _defineProperty3.default)({
                'nt-web-tabs-tabs': true,
                'retro': this.props.type === 'retro'
            }, this.props.className, !!this.props.className));
            var Title = React.Children.map(this.props.children, function (item, index) {
                var isActive = _this3.state.activeKey === item.props.activeKey;
                var titleClassNames = classNames((0, _defineProperty3.default)({
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
__decorate([index_2.autoBindMethod], Tabs.prototype, "handleAnyDomChange", null);
Tabs = __decorate([index_1.TransmitTransparently()], Tabs);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tabs;