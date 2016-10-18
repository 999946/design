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
var React = require("react");
var ReactDOM = require("react-dom");
var classNames = require("classnames");
var typings = require("./tooltip.type");
require("./tooltip.css");
var index_1 = require('nt-auto-bind');
var cumulativeOffset = function cumulativeOffset(element) {
    var top = 0,
        left = 0;
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);
    return {
        top: top,
        left: left
    };
};

var ToolTip = function (_React$Component) {
    _inherits(ToolTip, _React$Component);

    function ToolTip() {
        _classCallCheck(this, ToolTip);

        var _this = _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(ToolTip, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.childrenDom = ReactDOM.findDOMNode(this.childrenRef);
            this.childrenDom.addEventListener('mouseover', this.handleChildrenMouseOver);
            this.childrenDom.addEventListener('mouseleave', this.handleChildrenMouseLeave);
            this.childrenDom.addEventListener('click', this.handleChildrenClick);
            this.tooltipDom = document.createElement('div');
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
            var childrenOffset = cumulativeOffset(this.childrenDom);
            this.setState({
                childrenLeft: childrenOffset.left,
                childrenTop: childrenOffset.top,
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
                    toolTipStyle.top = this.state.childrenTop + this.state.tooltipHeight;
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
                className: classNames(_defineProperty({
                    'nt-web-tooltip-tooltip': true,
                    'active': this.state.show
                }, position, true)),
                style: toolTipStyle
            };
            var TooltipElement = React.createElement("span", __assign({}, tooltipProps), this.props.title === '' ? this.props.titleRender() : this.props.title);
            var tooltipShadowStyle = {
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                opacity: 0.3,
                backgroundColor: 'black',
                display: this.state.show ? 'block' : 'none',
                zIndex: this.props.shadowZIndex
            };
            var TooltipShadowElement = React.createElement("div", { onClick: this.handleClose, style: tooltipShadowStyle });
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