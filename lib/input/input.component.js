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
var typings = require('./input.type');
var classNames = require('classnames');
var _ = require('lodash');
var index_1 = require('nt-transmit-transparently');
var validate_1 = require('./validate');
require('./input.css');
var separateLayoutStyle = function separateLayoutStyle(props) {
    var cloneStyle = _.cloneDeep(props.style) || {};
    var separateStyle = {};
    var layoutStyles = ['width', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
    layoutStyles.forEach(function (styleName) {
        separateStyle[styleName] = _.cloneDeep(cloneStyle[styleName]);
        cloneStyle[styleName] = null;
    });
    return {
        separateStyle: separateStyle,
        originStyle: cloneStyle
    };
};
var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
        var _ref;

        _classCallCheck(this, Input);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Input, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                value: this.props.value || this.props.defaultValue
            });
        }
    }, {
        key: "handleInputChange",
        value: function handleInputChange(event) {
            this.props.onChange(event.target.value);
            var validateResult = this.props.validateMiddleware(event.target.value, validate_1.default);
            this.setState({
                hasError: !validateResult.ok,
                errorMessage: validateResult.errorMessage,
                value: event.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames3;

            var classes = classNames(_defineProperty({
                'nt-web-input-input': true,
                'no-label': this.props.label === ''
            }, this.props.className, !!this.props.className));
            var Highlight = null;
            if (this.props.highlight) {
                Highlight = React.createElement("span", { className: "highlight" });
            }

            var _separateLayoutStyle = separateLayoutStyle(this.props);

            var separateStyle = _separateLayoutStyle.separateStyle;
            var originStyle = _separateLayoutStyle.originStyle;

            var inputClasses = classNames(_defineProperty({
                'input': true,
                'no-label': this.props.label === ''
            }, this.props.textAlign, true));
            var labelClasses = classNames((_classNames3 = {
                'label': true
            }, _defineProperty(_classNames3, this.props.textAlign, true), _defineProperty(_classNames3, 'disabled', this.props.disabled), _defineProperty(_classNames3, 'valid-disabled', this.props.disabled && this.state.value !== null && this.state.value !== undefined), _classNames3));
            var bottomBarClasses = classNames({
                'bottom-bar': true,
                'bottom-bar-error': this.state.hasError
            });
            var HighlightLine = null;
            if (this.props.highlightLine) {
                HighlightLine = React.createElement("span", { className: bottomBarClasses });
            }
            var ErrorLabel = null;
            if (this.state.hasError) {
                ErrorLabel = React.createElement("span", { className: "label-error" }, this.state.errorMessage);
            }
            return React.createElement("div", { className: classes, style: separateStyle }, React.createElement("input", __assign({}, this.props.others, { style: originStyle, required: true, disabled: this.props.disabled, onChange: this.handleInputChange.bind(this), className: inputClasses })), React.createElement("div", { className: "right-addon" }, this.props.rightRender()), this.props.innerRender(), Highlight, HighlightLine, React.createElement("label", { className: labelClasses }, this.props.label, ErrorLabel));
        }
    }]);

    return Input;
}(React.Component);
Input.defaultProps = new typings.Props();
Input = __decorate([index_1.TransmitTransparently()], Input);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;