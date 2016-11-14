"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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
var classNames = require("classnames");
var typings = require("./tooltip.type");
require("./tooltip.css");
var index_1 = require('nt-auto-bind');

var ToolTip = function (_React$Component) {
    (0, _inherits3.default)(ToolTip, _React$Component);

    function ToolTip() {
        (0, _classCallCheck3.default)(this, ToolTip);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(ToolTip, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.childrenDom = ReactDOM.findDOMNode(this.childrenRef);
            this.childrenDom.addEventListener('mouseover', this.handleChildrenMouseOver);
            this.childrenDom.addEventListener('mouseleave', this.handleChildrenMouseLeave);
            this.childrenDom.addEventListener('click', this.handleChildrenClick);
            this.tooltipDom = document.createElement('div');
            if (this.props.className) {
                this.tooltipDom.className = this.props.className;
            }
            document.body.appendChild(this.tooltipDom);
            if (this.props.showShadow) {
                this.tooltipShadowDom = document.createElement('div');
                document.body.appendChild(this.tooltipShadowDom);
            }
            this.renderTooltip();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.childrenDom.removeEventListener('mouseover', this.handleChildrenMouseOver);
            this.childrenDom.removeEventListener('mouseleave', this.handleChildrenMouseLeave);
            this.childrenDom.addEventListener('click', this.handleChildrenClick);
            document.body.removeChild(this.tooltipDom);
            if (this.props.showShadow) {
                document.body.removeChild(this.tooltipShadowDom);
            }
        }
    }, {
        key: "showTooltipPosition",
        value: function showTooltipPosition() {
            var childrenBoundingClientRect = this.childrenDom.getBoundingClientRect();
            var tooltipSpanDom = this.tooltipDom.childNodes[0];
            var tooltipSpanBoundingClientRect = tooltipSpanDom.getBoundingClientRect();
            this.setState({
                childrenLeft: childrenBoundingClientRect.left + document.body.scrollLeft,
                childrenTop: childrenBoundingClientRect.top + document.body.scrollTop,
                childrenWidth: childrenBoundingClientRect.width,
                childrenHeight: childrenBoundingClientRect.height,
                tooltipWidth: tooltipSpanBoundingClientRect.width,
                tooltipHeight: tooltipSpanBoundingClientRect.height,
                show: true
            });
        }
    }, {
        key: "handleChildrenClick",
        value: function handleChildrenClick(event) {
            if (this.props.type !== 'click') {
                return;
            }
            if (!this.state.show) {
                this.showTooltipPosition();
            } else {
                this.handleClose();
            }
        }
    }, {
        key: "handleChildrenMouseOver",
        value: function handleChildrenMouseOver(event) {
            if (this.props.type !== 'hover') {
                return;
            }
            this.showTooltipPosition();
        }
    }, {
        key: "handleChildrenMouseLeave",
        value: function handleChildrenMouseLeave(event) {
            if (this.props.type !== 'hover') {
                return;
            }
            this.handleClose();
        }
    }, {
        key: "handleClose",
        value: function handleClose() {
            this.setState({
                show: false
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.renderTooltip();
        }
    }, {
        key: "setPosition",
        value: function setPosition(toolTipStyle, position) {
            switch (position) {
                case 'left':
                    toolTipStyle.left = this.state.childrenLeft - this.state.tooltipWidth - 7;
                    toolTipStyle.top = this.state.childrenTop - (this.state.tooltipHeight / 2 - this.state.childrenHeight / 2);
                    break;
                case 'top':
                    toolTipStyle.left = this.state.childrenLeft + this.state.childrenWidth / 2 - this.state.tooltipWidth / 2;
                    toolTipStyle.top = this.state.childrenTop - this.state.tooltipHeight - 7;
                    break;
                case 'right':
                    toolTipStyle.left = this.state.childrenLeft + this.state.childrenWidth + 7;
                    toolTipStyle.top = this.state.childrenTop - (this.state.tooltipHeight / 2 - this.state.childrenHeight / 2);
                    break;
                case 'bottom':
                    toolTipStyle.left = this.state.childrenLeft + this.state.childrenWidth / 2 - this.state.tooltipWidth / 2;
                    toolTipStyle.top = this.state.childrenTop + this.state.childrenHeight + 7;
                    break;
            }
        }
    }, {
        key: "renderTooltip",
        value: function renderTooltip() {
            var toolTipStyle = {
                zIndex: this.props.zIndex,
                backgroundColor: this.props.simple ? 'transparent' : null
            };
            var position = this.props.position;
            this.setPosition(toolTipStyle, position);
            if (toolTipStyle.left < 0) {
                this.setPosition(toolTipStyle, 'right');
                position = 'right';
            }
            if (toolTipStyle.right > window.outerWidth) {
                this.setPosition(toolTipStyle, 'left');
                position = 'left';
            }
            if (toolTipStyle.top < 0) {
                this.setPosition(toolTipStyle, 'bottom');
                position = 'bottom';
            }
            if (toolTipStyle.top > window.outerHeight) {
                this.setPosition(toolTipStyle, 'top');
                position = 'top';
            }
            var tooltipProps = {
                className: classNames((0, _defineProperty3.default)({
                    'nt-web-tooltip-tooltip': true,
                    'simple': this.props.simple,
                    'active': this.state.show
                }, position, true)),
                style: toolTipStyle
            };
            var TooltipElement = React.createElement("span", __assign({}, tooltipProps), this.props.title === '' ? this.props.titleRender() : this.props.title);
            var tooltipShadowStyle = (0, _extends3.default)({
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                opacity: 0.3,
                backgroundColor: 'black',
                display: this.state.show ? 'block' : 'none',
                zIndex: this.props.shadowZIndex
            }, this.props.shadowStyle);
            var TooltipShadowElement = React.createElement("div", { onClick: this.handleClose, className: "tooltip-shadow", style: tooltipShadowStyle });
            ReactDOM.render(TooltipElement, this.tooltipDom);
            if (this.props.showShadow) {
                ReactDOM.render(TooltipShadowElement, this.tooltipShadowDom);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var children = React.cloneElement(React.Children.only(this.props.children), {
                ref: function ref(_ref) {
                    _this2.childrenRef = _ref;
                }
            });
            return children;
        }
    }]);
    return ToolTip;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToolTip;
ToolTip.defaultProps = new typings.Props();
__decorate([index_1.autoBindMethod], ToolTip.prototype, "showTooltipPosition", null);
__decorate([index_1.autoBindMethod], ToolTip.prototype, "handleChildrenClick", null);
__decorate([index_1.autoBindMethod], ToolTip.prototype, "handleChildrenMouseOver", null);
__decorate([index_1.autoBindMethod], ToolTip.prototype, "handleChildrenMouseLeave", null);
__decorate([index_1.autoBindMethod], ToolTip.prototype, "handleClose", null);