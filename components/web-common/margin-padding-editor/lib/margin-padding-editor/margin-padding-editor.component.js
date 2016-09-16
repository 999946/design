"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var typings = require('./margin-padding-editor.type');
var classNames = require('classnames');
var index_1 = require('nt-auto-bind');
require('./margin-padding-editor.css');

var MarginPaddingEditor = function (_React$Component) {
    _inherits(MarginPaddingEditor, _React$Component);

    function MarginPaddingEditor() {
        var _ref;

        _classCallCheck(this, MarginPaddingEditor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = MarginPaddingEditor.__proto__ || Object.getPrototypeOf(MarginPaddingEditor)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        _this.lastX = null;
        _this.lastY = null;
        _this.currentHolding = '';
        return _this;
    }

    _createClass(MarginPaddingEditor, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                paddingLeft: this.props.paddingLeft,
                paddingTop: this.props.paddingTop,
                paddingRight: this.props.paddingRight,
                paddingBottom: this.props.paddingBottom,
                marginLeft: this.props.marginLeft,
                marginTop: this.props.marginTop,
                marginRight: this.props.marginRight,
                marginBottom: this.props.marginBottom
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
        }
    }, {
        key: "handleMouseDown",
        value: function handleMouseDown(name, event) {
            this.lastX = event.clientX;
            this.lastY = event.clientY;
            this.currentHolding = name;
        }
    }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
            var diffX = event.clientX - this.lastX;
            var diffY = event.clientY - this.lastY;
            switch (this.currentHolding) {
                case 'marginLeft':
                    this.setState({
                        marginLeft: this.state.marginLeft -= diffX
                    });
                    this.props.onChange(this.currentHolding, this.state.marginLeft);
                    break;
                case 'paddingLeft':
                    this.setState({
                        paddingLeft: this.state.paddingLeft -= diffX
                    });
                    this.props.onChange(this.currentHolding, this.state.paddingLeft);
                    break;
                case 'marginRight':
                    this.setState({
                        marginRight: this.state.marginRight += diffX
                    });
                    this.props.onChange(this.currentHolding, this.state.marginRight);
                    break;
                case 'paddingRight':
                    this.setState({
                        paddingRight: this.state.paddingRight += diffX
                    });
                    this.props.onChange(this.currentHolding, this.state.paddingRight);
                    break;
                case 'marginTop':
                    this.setState({
                        marginTop: this.state.marginTop -= diffY
                    });
                    this.props.onChange(this.currentHolding, this.state.marginTop);
                    break;
                case 'paddingTop':
                    this.setState({
                        paddingTop: this.state.paddingTop -= diffY
                    });
                    this.props.onChange(this.currentHolding, this.state.paddingTop);
                    break;
                case 'marginBottom':
                    this.setState({
                        marginBottom: this.state.marginBottom += diffY
                    });
                    this.props.onChange(this.currentHolding, this.state.marginBottom);
                    break;
                case 'paddingBottom':
                    this.setState({
                        paddingBottom: this.state.paddingBottom += diffY
                    });
                    this.props.onChange(this.currentHolding, this.state.paddingBottom);
                    break;
            }
            this.lastX = event.clientX;
            this.lastY = event.clientY;
        }
    }, {
        key: "handleMouseUp",
        value: function handleMouseUp() {
            this.props.onFinalChange(this.currentHolding, this.state[this.currentHolding]);
            this.currentHolding = '';
        }
    }, {
        key: "handleChange",
        value: function handleChange(name, event) {
            this.setState(_defineProperty({}, name, Number(event.target.value)));
            this.props.onChange(name, Number(event.target.value));
            this.props.onFinalChange(name, Number(event.target.value));
        }
    }, {
        key: "renderTriangle",
        value: function renderTriangle(position, name) {
            var extendStyle = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

            var style = _extends(extendStyle, {
                width: 0,
                height: 0
            });
            var outerStyle = {};
            var classes = classNames({
                'button': true,
                'button-left': position === 'left',
                'button-top': position === 'top',
                'button-right': position === 'right',
                'button-bottom': position === 'bottom'
            });
            var normalBorderWidth = this.props.size / 4;
            var specialBorderWidth = this.props.size / 5;
            var outerWidth = this.props.size / 20;
            var outerSpace = this.props.size / 40;
            switch (position) {
                case 'left':
                    style.borderTop = normalBorderWidth + "px solid transparent";
                    style.borderBottom = normalBorderWidth + "px solid transparent";
                    style.borderRightStyle = 'solid';
                    style.borderRightWidth = specialBorderWidth;
                    outerStyle.width = outerWidth;
                    break;
                case 'top':
                    style.borderLeft = normalBorderWidth + "px solid transparent";
                    style.borderRight = normalBorderWidth + "px solid transparent";
                    style.borderBottomStyle = 'solid';
                    style.borderBottomWidth = specialBorderWidth;
                    outerStyle.height = outerWidth;
                    break;
                case 'right':
                    style.borderTop = normalBorderWidth + "px solid transparent";
                    style.borderBottom = normalBorderWidth + "px solid transparent";
                    style.borderLeftStyle = 'solid';
                    style.borderLeftWidth = specialBorderWidth;
                    outerStyle.width = outerWidth;
                    break;
                case 'bottom':
                    style.borderLeft = normalBorderWidth + "px solid transparent";
                    style.borderRight = normalBorderWidth + "px solid transparent";
                    style.borderTopStyle = 'solid';
                    style.borderTopWidth = specialBorderWidth;
                    outerStyle.height = outerWidth;
                    break;
            }
            switch (name) {
                case 'marginLeft':
                    style.marginLeft = -specialBorderWidth / 2;
                    break;
                case 'paddingLeft':
                    style.marginLeft = -outerWidth;
                    outerStyle.marginLeft = outerSpace;
                    break;
                case 'marginTop':
                    style.marginTop = -specialBorderWidth / 2;
                    break;
                case 'paddingTop':
                    style.marginTop = -outerWidth;
                    outerStyle.marginTop = outerSpace;
                    break;
                case 'marginRight':
                    style.marginLeft = -outerWidth;
                    outerStyle.marginLeft = outerSpace;
                    break;
                case 'paddingRight':
                    style.marginLeft = -specialBorderWidth / 2;
                    break;
                case 'marginBottom':
                    style.marginTop = -outerWidth;
                    outerStyle.marginTop = outerSpace;
                    break;
                case 'paddingBottom':
                    style.marginTop = -specialBorderWidth / 2;
                    break;
            }
            return React.createElement("div", { className: "button-container", style: outerStyle }, React.createElement("div", { className: classes, draggable: false, onMouseDown: this.handleMouseDown.bind(this, name), style: style }));
        }
    }, {
        key: "handleInputLeave",
        value: function handleInputLeave(name) {
            if (this.currentHolding !== '') {
                return;
            }
            var inputElement = ReactDOM.findDOMNode(this.refs[name + 'Input']);
            inputElement.blur();
        }
    }, {
        key: "handleInputEnter",
        value: function handleInputEnter(name) {
            if (this.currentHolding !== '') {
                return;
            }
            var inputElement = ReactDOM.findDOMNode(this.refs[name + 'Input']);
            inputElement.focus();
            inputElement.select();
        }
    }, {
        key: "render",
        value: function render() {
            var normalBorderWidth = this.props.size / 4;
            var specialBorderWidth = this.props.size / 7;
            var containerStyle = {
                width: this.props.size,
                height: this.props.size
            };
            var leftStyle = {
                left: specialBorderWidth,
                top: this.props.size / 2 - normalBorderWidth
            };
            var topStyle = {
                top: specialBorderWidth,
                left: this.props.size / 2 - normalBorderWidth
            };
            var rightStyle = {
                right: specialBorderWidth,
                top: this.props.size / 2 - normalBorderWidth
            };
            var bottomStyle = {
                bottom: specialBorderWidth,
                left: this.props.size / 2 - normalBorderWidth
            };
            var numberOuterLeftStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                left: 0,
                top: this.props.size / 2 - specialBorderWidth / 2
            };
            var numberOuterTopStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                top: 0,
                left: this.props.size / 2 - specialBorderWidth / 2
            };
            var numberOuterRightStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                right: 0,
                top: this.props.size / 2 - specialBorderWidth / 2
            };
            var numberOuterBottomStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                bottom: 0,
                left: this.props.size / 2 - specialBorderWidth / 2
            };
            var numberInnerLeftStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                left: this.props.size / 3 - specialBorderWidth / 2,
                top: this.props.size / 2 - specialBorderWidth / 2
            };
            var numberInnerTopStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                top: this.props.size / 3 - specialBorderWidth / 2,
                left: this.props.size / 2 - specialBorderWidth / 2
            };
            var numberInnerRightStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                right: this.props.size / 3 - specialBorderWidth / 2,
                top: this.props.size / 2 - specialBorderWidth / 2
            };
            var numberInnerBottomStyle = {
                width: specialBorderWidth,
                height: specialBorderWidth,
                bottom: this.props.size / 3 - specialBorderWidth / 2,
                left: this.props.size / 2 - specialBorderWidth / 2
            };
            return React.createElement("div", { className: "nt-web-margin-padding-editor-margin_padding_editor", style: containerStyle }, React.createElement("div", { className: "left", style: leftStyle }, this.renderTriangle('left', 'marginLeft'), this.renderTriangle('right', 'paddingLeft', { marginLeft: 5 })), React.createElement("div", { className: "right", style: rightStyle }, this.renderTriangle('left', 'paddingRight'), this.renderTriangle('right', 'marginRight', { marginLeft: 5 })), React.createElement("div", { className: "top", style: topStyle }, this.renderTriangle('top', 'marginTop'), this.renderTriangle('bottom', 'paddingTop', { marginTop: 5 })), React.createElement("div", { className: "bottom", style: bottomStyle }, this.renderTriangle('top', 'paddingBottom'), this.renderTriangle('bottom', 'marginBottom', { marginTop: 5 })), React.createElement("div", { className: "number", style: numberOuterLeftStyle }, React.createElement("input", { className: "input", ref: "marginLeftInput", onMouseEnter: this.handleInputEnter.bind(this, 'marginLeft'), onMouseLeave: this.handleInputLeave.bind(this, 'marginLeft'), onChange: this.handleChange.bind(this, 'marginLeft'), value: this.state.marginLeft })), React.createElement("div", { className: "number", style: numberOuterTopStyle }, React.createElement("input", { className: "input", ref: "marginTopInput", onMouseEnter: this.handleInputEnter.bind(this, 'marginTop'), onMouseLeave: this.handleInputLeave.bind(this, 'marginTop'), onChange: this.handleChange.bind(this, 'marginTop'), value: this.state.marginTop })), React.createElement("div", { className: "number", style: numberOuterRightStyle }, React.createElement("input", { className: "input", ref: "marginRightInput", onMouseEnter: this.handleInputEnter.bind(this, 'marginRight'), onMouseLeave: this.handleInputLeave.bind(this, 'marginRight'), onChange: this.handleChange.bind(this, 'marginRight'), value: this.state.marginRight })), React.createElement("div", { className: "number", style: numberOuterBottomStyle }, React.createElement("input", { className: "input", ref: "marginBottomInput", onMouseEnter: this.handleInputEnter.bind(this, 'marginBottom'), onMouseLeave: this.handleInputLeave.bind(this, 'marginBottom'), onChange: this.handleChange.bind(this, 'marginBottom'), value: this.state.marginBottom })), React.createElement("div", { className: "number", style: numberInnerLeftStyle }, React.createElement("input", { className: "input", ref: "paddingLeftInput", onMouseEnter: this.handleInputEnter.bind(this, 'paddingLeft'), onMouseLeave: this.handleInputLeave.bind(this, 'paddingLeft'), onChange: this.handleChange.bind(this, 'paddingLeft'), value: this.state.paddingLeft })), React.createElement("div", { className: "number", style: numberInnerTopStyle }, React.createElement("input", { className: "input", ref: "paddingTopInput", onMouseEnter: this.handleInputEnter.bind(this, 'paddingTop'), onMouseLeave: this.handleInputLeave.bind(this, 'paddingTop'), onChange: this.handleChange.bind(this, 'paddingTop'), value: this.state.paddingTop })), React.createElement("div", { className: "number", style: numberInnerRightStyle }, React.createElement("input", { className: "input", ref: "paddingRightInput", onMouseEnter: this.handleInputEnter.bind(this, 'paddingRight'), onMouseLeave: this.handleInputLeave.bind(this, 'paddingRight'), onChange: this.handleChange.bind(this, 'paddingRight'), value: this.state.paddingRight })), React.createElement("div", { className: "number", style: numberInnerBottomStyle }, React.createElement("input", { className: "input", ref: "paddingBottomInput", onMouseEnter: this.handleInputEnter.bind(this, 'paddingBottom'), onMouseLeave: this.handleInputLeave.bind(this, 'paddingBottom'), onChange: this.handleChange.bind(this, 'paddingBottom'), value: this.state.paddingBottom })));
        }
    }]);

    return MarginPaddingEditor;
}(React.Component);

MarginPaddingEditor.defaultProps = new typings.Props();
__decorate([index_1.autoBindMethod], MarginPaddingEditor.prototype, "handleMouseMove", null);
__decorate([index_1.autoBindMethod], MarginPaddingEditor.prototype, "handleMouseUp", null);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarginPaddingEditor;