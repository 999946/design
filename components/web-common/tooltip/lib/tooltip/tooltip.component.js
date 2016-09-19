"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value       : subClass,
            enumerable  : false,
            writable    : true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var typings = require('./tooltip.type');
require('./tooltip.css');

var ToolTip = function (_React$Component) {
    _inherits(ToolTip, _React$Component);

    function ToolTip() {
        var _ref;

        _classCallCheck(this, ToolTip);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        _this.handleChildrenMouseOverBind = _this.handleChildrenMouseOver.bind(_this);
        _this.handleChildrenMouseLeaveBind = _this.handleChildrenMouseLeave.bind(_this);
        return _this;
    }

    _createClass(ToolTip, [{
        key  : 'componentDidMount',
        value: function componentDidMount() {
            this.childrenDom = ReactDOM.findDOMNode(this.childrenRef);
            this.childrenDom.addEventListener('mouseover', this.handleChildrenMouseOverBind);
            this.childrenDom.addEventListener('mouseleave', this.handleChildrenMouseLeaveBind);
            this.tooltipDom = document.createElement('div');
            document.body.appendChild(this.tooltipDom);
            this.renderTooltip();
        }
    }, {
        key  : 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.childrenDom.removeEventListener('mouseover', this.handleChildrenMouseOverBind);
            this.childrenDom.removeEventListener('mouseleave', this.handleChildrenMouseLeaveBind);
            document.body.removeChild(this.tooltipDom);
        }
    }, {
        key  : 'handleChildrenMouseOver',
        value: function handleChildrenMouseOver(event) {
            var childrenBoundingClientRect = this.childrenDom.getBoundingClientRect();
            var tooltipSpanDom = this.tooltipDom.childNodes[0];
            var tooltipSpanBoundingClientRect = tooltipSpanDom.getBoundingClientRect();
            this.setState({
                childrenLeft  : childrenBoundingClientRect.left,
                childrenTop   : childrenBoundingClientRect.top,
                childrenWidth : childrenBoundingClientRect.width,
                childrenHeight: childrenBoundingClientRect.height,
                tooltipWidth  : tooltipSpanBoundingClientRect.width,
                tooltipHeight : tooltipSpanBoundingClientRect.height,
                show          : true
            });
        }
    }, {
        key  : 'handleChildrenMouseLeave',
        value: function handleChildrenMouseLeave(event) {
            this.setState({
                show: false
            });
        }
    }, {
        key  : 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.renderTooltip();
        }
    }, {
        key  : 'setPosition',
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
        key  : 'renderTooltip',
        value: function renderTooltip() {
            var toolTipStyle = {
                zIndex: this.props.zIndex
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
            var toolTipProps = {
                className: classNames(_defineProperty({
                    'nt-web-tooltip-tooltip': true,
                    'active'                : this.state.show
                }, position, true)),
                style    : toolTipStyle
            };
            var ToolTipElement = React.createElement("span", __assign({}, toolTipProps), this.props.title === '' ? this.props.titleRender() : this.props.title);
            ReactDOM.render(ToolTipElement, this.tooltipDom);
        }
    }, {
        key  : 'render',
        value: function render() {
            var _this2 = this;

            var children = React.cloneElement(React.Children.only(this.props.children), {
                ref: function ref(_ref2) {
                    _this2.childrenRef = _ref2;
                }
            });
            return children;
        }
    }]);

    return ToolTip;
}(React.Component);

ToolTip.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = ToolTip;