"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
var ReactDOM = require('react-dom');
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
        return _this;
    }

    _createClass(ToolTip, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.selfDom = ReactDOM.findDOMNode(this);
            this.tooltipDom = ReactDOM.findDOMNode(this.tooltipRef);
            this.childrenDom = ReactDOM.findDOMNode(this.childrenRef);
            this.childrenDom.addEventListener('mouseover', this.handleChildrenMouseOverBind);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.childrenDom.removeEventListener('mouseover', this.handleChildrenMouseOverBind);
        }
    }, {
        key: 'handleChildrenMouseOver',
        value: function handleChildrenMouseOver(event) {
            this.setState({
                childrenLeft: this.childrenDom.clientLeft - this.selfDom.clientLeft,
                childrenTop: this.childrenDom.clientTop - this.selfDom.clientTop,
                childrenWidth: this.childrenDom.clientWidth,
                childrenHeight: this.childrenDom.clientHeight,
                tooltipWidth: this.tooltipDom.clientWidth,
                tooltipHeight: this.tooltipDom.clientHeight
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var children = React.cloneElement(React.Children.only(this.props.children), {
                ref: function ref(_ref2) {
                    _this2.childrenRef = _ref2;
                }
            });
            var toolTipStyle = {
                marginLeft: this.state.childrenWidth / 2 - this.state.tooltipWidth / 2,
                marginTop: -(this.state.tooltipHeight + 3)
            };
            var toolTipProps = {
                className: 'tooltip-text',
                style: toolTipStyle,
                ref: function ref(_ref3) {
                    _this2.tooltipRef = _ref3;
                }
            };
            return React.createElement("div", { className: "nt-tooltip-lib-tooltip" }, children, React.createElement("span", __assign({}, toolTipProps), this.props.title === '' ? this.props.titleRender() : this.props.title));
        }
    }]);

    return ToolTip;
}(React.Component);

ToolTip.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToolTip;